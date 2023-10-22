const {default: styles} = await import('./assets/sass/modules/app.module.scss');

export default async function Start(start: HTMLElement): Promise<void> {
  
    start.innerHTML = (`
      <div id='container' class=${styles['d-flex-center-max']}>
          <div class=${styles['d-flex-center-gap-20']}>
              <a href="https://www.typescriptlang.org/">
                  <img 
                      class=${styles['ts-image']} 
                      src='images/Typescript.png' 
                      alt='typescript logo'   
                  />
              </a>
              <h1 class=${styles['font-weight-400']}>Standalone - TypeScript</h1>
              <a href="https://webpack.js.org/">
                  <img class=${styles['webpack-image']} 
                   src='images/webpack.png' 
                   alt='webpack logo'
                  />
              </a>
          </div>
          <div>
              <button class=${styles['button-style']} component='Counter'></button>
          </div>
          <div  class=${styles['d-flex-gap-20']}  component='Rows'></div>
          <footer class=${styles['footer-abs-between']}  component='Footer'></footer>
  
      </div>
    `)
  
    // Dynamically import and execute the Render function
    const { default: Render } = await import('./assets/render/render');
    Render();
  }
  