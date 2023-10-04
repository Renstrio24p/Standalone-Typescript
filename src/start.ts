import styles from './assets/sass/modules/app.module.scss';
import Render from "./assets/render/render";

export default function Start(start: HTMLElement): void {
    start.innerHTML = (
        `
    <div id='container' class=${styles['d-flex-center-max']}>

        <div class=${styles['d-flex-center-gap-20']}>
            <a href="https://www.typescriptlang.org/">
                <img 
                    class=${styles['ts-image']} 
                    src='images/Typescript.png' 
                    alt='typescript logo'   
                />
            </a>
            <h1 class=${styles['font-weight-400']}>Standalone - Typescript</h1>
            <a href="https://webpack.js.org/">
                <img class=${styles['webpack-image']} 
                 src='images/webpack.png' 
                 alt='webpack logo'
                />
            </a>
        </div>
        <div>
            <button class=${styles['button-style']} id='count'></button>
        </div>
        <div  class=${styles['d-flex-gap-20']} id="rows"></div>
        <footer class=${styles['footer-abs-between']} id="footer"></footer>

    </div>
    `
    )

    Render();
  }
  