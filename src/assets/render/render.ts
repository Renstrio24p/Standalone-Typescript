// Function to dynamically import all JavaScript files within a directory
async function importAllComponents() {
  const context = require.context('../../components', true, /\.ts$/); // Fetch all .js files
  const componentModules = await Promise.all(
    context.keys().map(context)
  );

  const components = {};

  // Iterate through the imported modules and add them to the components object
  componentModules.forEach((module) => {
    const componentName = module.default ? module.default.name : null;
    if (componentName) {
      components[componentName] = module.default;
    }
  });

  return components;
}

export default async function Render() {
  // Dynamically import all JavaScript files within the components directory
  const components = await importAllComponents();

  // Get all elements with a data-component attribute
  const componentElements = document.querySelectorAll('[component]') as any;

  // Dynamically render components based on their data-component attribute
  for (const element of componentElements) {
    const componentName = element.getAttribute('component');
    
    if (components[componentName]) {
      components[componentName](element);
    } else {
      console.warn(`Component ${componentName} not found.`);
    }
  }

  // Hash Applied (if needed)
  window.addEventListener('DOMContentLoaded', () => {
    // Your hash code here
  });
}
