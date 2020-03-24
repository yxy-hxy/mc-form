import { PROPS_MIXIN } from '../../mixins';
import { deepClone } from '../../utils';

/**
 * input组件
 */
export default {
  name: 'McInput',

  mixins: [PROPS_MIXIN],

  render(h) {
    if (this.hidden) {
      return null;
    }

    let { ui, input, field, label, type } = this.config;
    let attrs = { attrs: deepClone(input) };

    return (
      <el-col
        span={ ui.column }>
        <el-form-item prop={ field } labelWidth={ ui.labelWidth } label={ label } class="mc-form-item">
          <el-input
            { ...attrs }
            size={ ui.size }
            type={ type }
            value={ this.value }
            readonly={ this.readonly }
            disabled={ this.disabled }
            clearable={ ui.clearable }
            placeholder={ ui.placeholder }
            onInput={ value => this.$emit('input', value) }></el-input>
        </el-form-item>
      </el-col>
    );
  }
};
