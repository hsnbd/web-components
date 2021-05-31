class HsnbdHelloWorld extends HTMLElement {
    constructor() {
        super();
        const _style = document.createElement('style');
        const _template = document.createElement('template');

        _style.innerHTML = `
        h1 {
          color: tomato;
        }
        `;

        _template.innerHTML = `
        <h1>
          Hello world. This is my first custom element
        </h1>
      `;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(_style);
        this.shadowRoot.appendChild(_template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["theme"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.table({name, oldVal, newVal});
    }

    connectedCallback() {
        console.log("Element added to the dom");
    }

    disconnectedCallback() {
        console.log("Element removed from dom")
    }
}
window.customElements.define('hsnbd-hello-world', HsnbdHelloWorld);
