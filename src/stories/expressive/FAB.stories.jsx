export default {
  title: "Expressive Vainilla/FAB",
  parameters: {
    layout: "centered"
  }
};

export const AllVariants = () => `
  <div class="fab-demo-grid">
    <button class="ui-fab" type="button" aria-label="Add"><span class="ui-icon ui-icon--heavy">add</span></button>
    <button class="ui-fab ui-fab--primary" type="button" aria-label="Edit"><span class="ui-icon ui-icon--heavy">edit</span></button>
    <button class="ui-fab ui-fab--sm" type="button" aria-label="Small"><span class="ui-icon ui-icon--sm">star</span></button>
    <button class="ui-fab ui-fab--lg" type="button" aria-label="Large"><span class="ui-icon ui-icon--lg ui-icon--heavy">favorite</span></button>
    <button class="ui-fab" type="button" aria-label="Disabled" disabled><span class="ui-icon">block</span></button>
  </div>
`;

export const Themed = () => `
  <button class="ui-fab ui-fab--primary" type="button" style="--ui-sys-color-primary: #03dac6; --ui-sys-color-on-primary: #001313;" aria-label="Themed FAB">
    <span class="ui-icon ui-icon--heavy">palette</span>
  </button>
`;
