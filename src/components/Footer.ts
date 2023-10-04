import styles from '../assets/sass/modules/app.module.scss';

export default function Footer(Footer : HTMLElement): void{

    Footer.innerHTML = `
        <div class=${styles['d-flex-between']}>
            <span>Version 1.0.4</span>
            <img class=${styles['sass_img']} src='images/sass.png' alt='sass logo' />
        </div>
        <div class=${styles['d-flex-between']}>
            <img class=${styles['github_img']} src='images/github.png' alt='github' />
            <span>Codespaces</span>
        </div>
    `
}