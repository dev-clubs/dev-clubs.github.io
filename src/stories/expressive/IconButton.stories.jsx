export default {
  title: "Expressive Vainilla/Icon Button",
  parameters: {
    layout: "centered"
  }
};

export const AllVariants = () => `
  <div class="icon-button-demo-grid">
    <button class="ui-icon-button" type="button" aria-label="Favorite"><span class="ui-icon">favorite</span></button>
    <button class="ui-icon-button ui-icon-button--tonal" type="button" aria-label="Star"><span class="ui-icon">star</span></button>
    <button class="ui-icon-button ui-icon-button--filled" type="button" aria-label="Selected"><span class="ui-icon ui-icon--filled">check</span></button>
    <button class="ui-icon-button ui-icon-button--outlined" type="button" aria-label="Disabled" disabled><span class="ui-icon">block</span></button>
  </div>
`;

export const Themed = () => `
  <button class="ui-icon-button ui-icon-button--filled" type="button" style="--ui-sys-color-primary: #03dac6; --ui-sys-color-on-primary: #001313;" aria-label="Themed icon button">
    <span class="ui-icon">palette</span>
  </button>
`;
