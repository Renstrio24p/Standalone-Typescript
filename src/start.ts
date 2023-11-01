import './assets/css/app.css'
const { default: Render } = await import('./assets/render/render');

export default async function Start(start: HTMLElement): Promise<void> {
  
    start.innerHTML = (`
        <div>
            <div id='TS'></div>
        </div>
    `)
  
    // Dynamically import and execute the Render function
    Render();
  }
  