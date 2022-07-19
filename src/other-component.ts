import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("other-component")
export class OtherComponent extends LitElement {
  render() {
    return html` <p>Hello from another component...</p> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "other-component": OtherComponent;
  }
}
