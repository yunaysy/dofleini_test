<template>
  <div class="input_text_custom">
    <a-input
      :placeholder="placeholder"
      size="large"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    value: String,
  }
}
</script>

<style lang="less">
.input_text_custom {
  .ant-input {
    border-radius: 5px;
  }
  .ant-input-lg {
    height: 45px;
    font-size: 14px;
  }
}
</style>