import { PROPS_MIXIN } from '../../mixins';

/**
 * date-picker组件
 */
export default {
  name: 'McDatePicker',

  mixins: [PROPS_MIXIN],

  render(h) {
    if (this.hidden) {
      return null;
    }

    let { ui, picker, field, label, type } = this.config;

    return (
      <el-col
        span={ ui.column }
        style={ ui.aequilate ? { width: `calc(${ui.column / 24 * 100 + '%'} - ${ui.labelWidth})` } : {} }>
        <el-form-item prop={ field } labelWidth={ui.labelWidth} label={ label } class="mc-form-item">
          <el-date-picker
            size={ ui.size }
            value={ this.value }
            type={ type }
            editable={ picker.editable }
            readonly={ this.readonly }
            disabled={ this.disabled }
            clearable={ ui.clearable }
            placeholder={ ui.placeholder }
            startPlaceholder={ picker.startPlaceholder }
            endPlaceholder={ picker.endPlaceholder }
            format={ picker.format }
            rangeSeparator={ picker.rangeSeparator }
            valueFormat={ picker.valueFormat }
            pickerOptions={ picker.pickerOptions }
            onInput={ value => this.$emit('input', value) }></el-date-picker>
        </el-form-item>
      </el-col>
    );
  }
};