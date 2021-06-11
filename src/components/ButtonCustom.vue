<template>
  <div class="button_custom">
    <a-button @click="$emit('click', $event)" :type="type" :size="size">
      <slot></slot>
    </a-button>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    size: String
  }
}
</script>

<style lang="less">
.button_custom {
  .ant-btn {
    color: black;
  }
  .ant-btn-lg {
    height: 45px;
    font-size: 14px;
    padding: 0 26px;
  }
  .ant-btn-primary {
    color: white;
  }
}
</style>