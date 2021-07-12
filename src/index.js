const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <style>
  </style>
  <textarea></textarea>
  <button>Explain</button>`;

class FareRules extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('fare-rules', FareRules);
