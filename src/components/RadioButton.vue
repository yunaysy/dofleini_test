<template>
  <div class="radio_button_custom">
    <a-radio-group :value="value" @input="$emit('change', $event)" size="large">
      <a-space :size="10">
        <a-radio-button
          v-for="(itemRadio, key) in radioButtonOptions"
          :key="key"
          :value="itemRadio.value"
        >
          {{ itemRadio.text }}
        </a-radio-button>
      </a-space>
    </a-radio-group>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: String,
    radioButtonOptions: Array,
  },
  methods: {
    onChange(e) {
       console.log(`checked = ${e}`, e);
    },
  }
}
</script>

<style lang="less">
  .radio_button_custom {
    .ant-radio-group-large {
      .ant-radio-button-wrapper {
        height: 45.74px;
        font-size: 14px;
      }
    }
    .ant-radio-button-wrapper:first-child:last-child {
      border-radius: 5px;
    }
    .ant-radio-button-wrapper {
      color: rgba(0, 0, 0, 1);
      &:hover {
        color: #149FFC;
      }
      &:focus-within {
        box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.08);
      }
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
      color: #149FFC;
      border-color: #48B5FE;
    }
  }
</style>