export default {
  title: "Expressive Vainilla/Button",
  parameters: {
    layout: "centered"
  }
};

export const AllVariants = () => `
  <div class="button-demo-grid">
    <button class="ui-button ui-button--ghost" type="button">Elevated</button>
    <button class="ui-button ui-button--primary" type="button">Filled</button>
    <button class="ui-button ui-button--tonal" type="button">Filled Tonal</button>
    <button class="ui-button ui-button--ghost" type="button">Outlined</button>
    <button class="ui-button" type="button">Text</button>
    <button class="ui-button ui-button--primary" type="button" disabled>Disabled</button>
  </div>
`;

export const Themed = () => `
  <button class="ui-button ui-button--primary" type="button" style="--ui-sys-color-primary: #6200ee; --ui-sys-color-on-primary: #fff;">
    Themed Button
  </button>
`;
