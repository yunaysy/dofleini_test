<template>
  <div class="radio_simple_custom">
    <div class="box" :class="{ checked }">
      <a-row>
        <a-col :span="2">
          <a-radio :value="value"></a-radio>
        </a-col>
        <a-col :span="22">
          <div class="text">
            <div class="label">{{ label }}</div>
            <div class="help">{{ help }}</div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    help: String,
    value: Number,
    checked: Boolean,
  }
}
</script>

<style lang="less">
  .radio_simple_custom {
    .box {
      border: 1.5px solid #e4e4e4;
      border-radius: 5px;
      padding: 16.26px 13px 19.01px 11px;
      &.checked {
        border: 1px solid #48B5FE;
        box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.08);
        .label {
          color: #149FFC;
        }
      }
      .text {
        padding-left: 9.4px;
        .label {
          margin-bottom: 5px;
        }
        .help {
          color:rgba(0, 0, 0, 0.45);
        }
      }
    }
  }
</style>