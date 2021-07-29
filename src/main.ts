import './style.css';
import { getGreenting1, getGreenting2 } from './greetings';

// HTMLで直書き、JavaScriptはmain.ts
const button1 = document.getElementById('button1') as HTMLButtonElement;
const label1 = document.getElementById('label1') as HTMLButtonElement;
button1.addEventListener('click', () => {
  label1.innerHTML = getGreenting1();
});


// main.tsでinnnerHTMLで設定
const app = document.querySelector('#app') as HTMLElement;
  
  app.innerHTML = `
  <h1>main.tsでinnnerHTMLで設定</h1>
  <button id="button2" class="styled" type="button">Say Hello</button>
  <label id="label2"></label>
`;

const button2 = document.getElementById('button2') as HTMLButtonElement;
const label2 = document.getElementById('label2') as HTMLButtonElement;

button2.addEventListener('click', () => {
  label2.innerHTML = getGreenting2();
});
