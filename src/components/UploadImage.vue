<template>
  <div class="upload_image">
    <a-upload
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt="avatar"
      />
      <div v-else>
        <a-icon :type="loading ? 'loading' : 'upload'" />
        <div class="ant-upload-text">
          Subir logo
        </div>
      </div>
    </a-upload>
  </div>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  data() {
    return {
      loading: false,
      imageUrl: '',
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
  },
};
</script>

<style lang="less">
.upload_image {
  .ant-upload.ant-upload-select-picture-card {
    width: 67px;
    height: 67px;
    margin-right: 0;
    margin-bottom: 0;
    border: none;
    border-radius: 50%;
    & > .ant-upload {
      padding: 0;
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>