const {default: styles} = await import('../assets/sass/modules/app.module.scss');

export default async function Footer(DOM : HTMLElement){

    DOM.innerHTML = `
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
Object.defineProperty(Footer, 'name', { value: 'Footer' }); // Defining DOM for Footer
