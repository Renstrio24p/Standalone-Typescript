
import { GitImg, TSImg, WebpackImg } from './Images';

export default function TypeScript(DOM: HTMLDivElement) {

    let counter = 0;

    function handleCounterChange(amount: number) {
    
        const newCount = counter + amount;
        counter = newCount < 0 ? 0 : newCount;
        counterSpan.textContent = counter.toString();
    }

    DOM.innerHTML = (`
    <div>
        <div class="ts-div">
            <div class="logo">
                <a href="http://ts.dev">
                    <img src=${TSImg} class="ts" alt="image" />
                </a>
            </div>
        <div>
            <h1>Standalone TypeScript</h1>
        <div class="ts-div2">
          <p>Learn Vanilla TS </p>
          <div class="ts">
            <img src=${TSImg} alt="ts-img"/>
          </div>
          at
          <pre class="apps">src/Start.ts</pre>
        </div>
        <div class="buttons">
            <button id="incrementBtn">+1</button>
            <button>Count : <span class="counter-span">${counter}</span></button>
            <button id="decrementBtn">-1</button>
        </div>
      </div>
      <div class="logo">
        <a href="http://webpack.ts.org">
          <img src=${WebpackImg} class="webpack" alt="" />
        </a>
      </div>
    </div>
    <div class="footer">
      <div class="version">version 1.0.6</div>
      <div class="github">
        <div class="gitlogo">
          <img src=${GitImg} class="git" alt="github" />
        </div>
        <p>Codespace</p>
      </div>
    </div>
  </div>
      `);

    const incrementButton = DOM.querySelector('#incrementBtn') as HTMLButtonElement;
    incrementButton.addEventListener('click', () => handleCounterChange(1));

    const decrementButton = DOM.querySelector('#decrementBtn') as HTMLButtonElement;
    decrementButton.addEventListener('click', () => handleCounterChange(-1));

    const counterSpan = DOM.querySelector('.counter-span') as HTMLSpanElement;

}
