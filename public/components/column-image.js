import {LitElement, html} from '/lit.all.min.js';

export default async () => {
  const rawStyles = await fetch('/components/column-image.css').then((res) => res.text());
  const styles = new CSSStyleSheet();
  styles.replaceSync(rawStyles);
  
  class ColumnImageElement extends LitElement {
    render() {
      return html`
        <slot></slot>
      `;
    }
  }

  window.customElements.define('x-column-image', ColumnImageElement);
};