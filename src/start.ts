import classNames from "classnames/bind";
import styles from './sass/modules/app.module.scss';
import Render from "./render/render";

export const cx = classNames.bind(styles);

export default function Start(start: HTMLElement): void {
    start.innerHTML = (
        `
            <div id='container' class=${cx('d-flex-center-max')}>

    <div class=${cx('d-flex-center-gap-20')}>
        <a href="https://www.typescriptlang.org/">
        <img 
            class=${cx('ts-image')} 
            src='Typescript.png' 
            alt='typescript logo'   
        /></a>
        <h1 class=${cx('font-weight-400')}>Standalone - Typescript</h1>
        <a href="https://webpack.js.org/">
            <img class=${cx('webpack-image')} 
                 src='webpack.png' 
                 alt='webpack logo'
            /></a>
    </div>
    <div>
        <button class=${cx('button-style')} id='count'></button>
    </div>
    <div  class=${cx('d-flex-gap-20')} id="rows"></div>
    <footer class=${cx('footer-abs-between')} id="footer"></footer>

</div>
    `
    )

    Render();
  }
  