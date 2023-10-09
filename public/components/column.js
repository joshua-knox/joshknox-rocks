class ColumnElement extends HTMLElement {
  constructor() {
    super();
    const h1Element = this.shadowRoot.querySelector('slot[name="heading"]')?.assignedNodes()?.[0];

    if (h1Element && 'attachInternals' in this) {
      this.internals_ = this.attachInternals();
      this.internals_.role = 'region';
      this.internals_.ariaLabel = h1Element.textContent;
    }
  }
}

window.customElements.define('x-column', ColumnElement);