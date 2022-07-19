import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./other-component";

@customElement("my-app")
export class App extends LitElement {
  render() {
    return html`
      <p>Hello World</p>
      <other-component></other-component>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-app": App;
  }
}
