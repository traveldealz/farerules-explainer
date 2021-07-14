import Explainer from './explainer.js';

const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <style>
  </style>
  <form>
    <textarea></textarea>
    <button type="submit">Explain</button>
  </form>
  <p></p>`;

class FareRules extends HTMLElement {
  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this.querySelector('form').addEventListener('submit', (event) =>
      this.submit(event)
    );
  }

  submit(event) {
    event.preventDefault();
    let text = this.querySelector('form textarea').value;
    let explainer = new Explainer(text);
    console.log(explainer.toString());
    this.querySelector('p').innerHTML = explainer.explain('de');
  }
}

customElements.define('fare-rules', FareRules);
