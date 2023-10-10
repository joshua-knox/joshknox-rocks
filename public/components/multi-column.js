import {LitElement, html} from '/lit.all.min.js';

export default async () => {
  const rawStyles = await fetch('/components/multi-column.css').then((res) => res.text());
  const styles = new CSSStyleSheet();
  styles.replaceSync(rawStyles);
  
  class MultiColumnElement extends LitElement {
    static styles = [
      styles,
    ];
  
    render() {
      return html`
        <slot></slot>
      `;
    }
  }
  
  window.customElements.define('x-multi-column', MultiColumnElement);
};