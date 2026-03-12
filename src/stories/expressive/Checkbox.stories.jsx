export default {
  title: "Expressive Vainilla/Checkbox",
  parameters: {
    layout: "centered"
  }
};

export const AllStates = () => `
  <div class="checkbox-demo-grid">
    <label class="ui-checkbox"><input class="ui-checkbox__control" type="checkbox" aria-label="Unchecked" /><span>Unchecked</span></label>
    <label class="ui-checkbox"><input class="ui-checkbox__control" type="checkbox" checked aria-label="Checked" /><span>Checked</span></label>
    <label class="ui-checkbox"><input class="ui-checkbox__control ui-checkbox__control--indeterminate" type="checkbox" aria-label="Indeterminate" /><span>Indeterminate</span></label>
    <label class="ui-checkbox"><input class="ui-checkbox__control" type="checkbox" disabled aria-label="Disabled" /><span>Disabled</span></label>
  </div>
`;

export const Themed = () => `
  <label class="ui-checkbox" style="--ui-checkbox-accent: #03dac6;">
    <input class="ui-checkbox__control" type="checkbox" checked aria-label="Themed Checkbox" />
    <span>
    Themed Checkbox
    </span>
  </label>
`;
