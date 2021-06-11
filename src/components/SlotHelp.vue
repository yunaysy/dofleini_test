<template>
  <div class="slot_help">
    <a-row>
      <a-col :span="1">
        <a-icon type="exclamation-circle-o" />
      </a-col>
      <a-col :span="23">
        <p v-for="(item, key) in paragrafhs" :key=key>{{ item }}</p>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    paragrafhs: Array
  }
}
</script>

<style lang="less">
.slot_help {
  i {
    font-size: 17px;
  }
  p {
    margin-bottom: 8px;
  }
  p:last-child {
    margin-bottom: 0;
  }
}
</style>