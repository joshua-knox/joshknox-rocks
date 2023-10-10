import {LitElement, html} from '/lit.all.min.js';

export default async () => {
  const rawStyles = await fetch('/components/column.css').then((res) => res.text());
  const styles = new CSSStyleSheet();
  styles.replaceSync(rawStyles);

  class ColumnElement extends LitElement {
    static styles = [
      styles,
    ];

    render() {
      return html`
        <slot></slot>
      `;
    }
  }

  window.customElements.define('x-column', ColumnElement);
};