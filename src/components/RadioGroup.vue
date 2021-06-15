<template>
  <div class="radio_group_custom">
    <a-radio-group
      :value="value"
      @input="$emit('change', $event)"
    >
      <a-row
        :gutter="13"
      >
        <a-col
          :span="12"
          v-for="(item, key) in radioGroupOptions"
          :key="key"
        >
          <radio-item
            :value="item.value"
            :checked="value == item.value"
            :label="item.label"
            :help="item.help">
          </radio-item>
        </a-col>
      </a-row>
    </a-radio-group>
  </div>
</template>

<script>
import RadioItem from '../components/RadioItem'
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    radioGroupOptions: Array,
    value: Number,
  },
  components: {
    RadioItem
  },
}
</script>

<style lang="less">
.radio_group_custom {
  .ant-radio-group {
    width: 100%;
  }
  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: #48b5fe;
  }
  .ant-radio-inner {
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-width: 2px;
    &::after {
      top: 2px;
      left: 2px;
    }
  }
  .ant-radio-checked {
    .ant-radio-inner {
      border-color: #48b5fe;
    }
  }
}  
</style>