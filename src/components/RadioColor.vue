<template>
  <div class="radio_color_custom">
    <a-radio-group
      :value="value"
      @input="$emit('change', $event)"
    >
      <a-radio
        v-for="(item, key) in colors"
        :key="key"
        :value="item.value"
      >
        <span
          v-if="value != item.value"
          class="circle"
          :style="{ backgroundColor: item.value }"
        ></span>
        <span
          v-else
          class="circle_checked"
          :style="{ borderColor: item.value, boxShadow: '0 0 0 4px' + item.shadowColor}"
        >
          <span
            class="circle_checked_small"
            :style="{ backgroundColor: item.value }"
          ></span>
        </span>
      </a-radio>
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
    colors: Array,
    value: String,
  },
}
</script>

<style lang="less">
  .radio_color_custom {
    .ant-radio {
      display: none;
    }
    .ant-radio-wrapper {
      margin-right: 11px;
    }
    span.ant-radio + * {
      padding-right: 0px;
      padding-left: 0px;
    }
    .circle {
      display: inline-block;
      height: 45px;
      width: 45px;
      border-radius: 50%;
    }
    .circle_checked {
      display: inline-block;
      position: relative;
      top: -11px;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      border: 1.5px solid;
      background-color: white;
      .circle_checked_small {
        position: relative;
        display: inline-block;
        top: 5px;
        left: 5px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
      }
    }
  }
</style>