
export default async function Rows(DOM: HTMLDivElement){

    const stylesModule = await import('../assets/sass/modules/app.module.scss');
    const styles = stylesModule.default;

    DOM.innerHTML = (`
        <div class=${styles.box}>
            <p>supports ES6+</p>
        </div>
        <div class=${styles.box}>
            <p>Modular SCSS</p>
        </div>
        <div class=${styles.box}>
            <p>Web Security Features</p>
        </div>
    `)
}

Object.defineProperty(Rows, 'name', { value: 'Rows' }); // Defining DOM for Rows


