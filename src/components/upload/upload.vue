<template>
  <div :class='classes' @click.stop="changeFile">
    <slot></slot>
    <div class="k-upload-form">
      <iframe frameborder="0" :name="`k-upload-iframe-${span}`" style="display:none;" ref="k-upload-iframe"></iframe>
      <form :action="action" :method="method" enctype="multipart/form-data" style="display:none;" ref="k-upload-form" :target="`k-upload-iframe-${span}`">
        <input type="file" :name="name" :id="id" @change="upload($event)" ref="k-upload-file" />
        <input type="hidden" :name="key" :id="key" :value="item" v-for="(item,key) in data" :key="key" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Upload",
  props: {
    method: { type: String, default: "post" },
    name: { type: String }, //提交的 name值
    id: { type: String }, //提交的 id值
    action: { type: String, required: true }, //url 要带/rest
    type: { type: String, default: "change" },
    data: { type: Object, default: () => { } },
    disabled: Boolean,
    maxFileSize: [String, Number], // 上传文件最大限制，单位B
  },
  computed: {
    classes() {
      return [
        "k-upload",
        {
          ["k-upload-disabled"]: this.disabled
        }
      ];
    }
  },
  data() {
    return {
      // select: false,
      file: null,
      span: Math.floor(Math.random() * 99999999)
    };
  },
  mounted() {
    const fm = this.$refs["k-upload-iframe"];
    if (!fm) return;
    if (fm.attachEvent) {
      fm.attachEvent("onload", e => this.complite(fm, e));
    } else {
      fm.onload = e => this.complite(fm, e);
    }
  },
  methods: {
    changeFile: function (e) {
      e.cancelBubble = true;
      if (this.disabled) return false;

      this.$refs["k-upload-file"].click();
      return false;
    },
    upload: function (e) {
      if (this.maxFileSize) {
        const fileSize = this.getSize(e.target)
        if (fileSize === 0) {
          this.$Message.warning('文件不能为空');
          return
        }
        if (fileSize > this.maxFileSize) {
          e.target.value = "";
          this.$Message.warning(`上传的附件最大为${~~(this.maxFileSize / (1024 * 1024))}MB，上传失败`);
          return
        }
      }
      this.file = e.target.value;
      this.file && this.$emit("change", this.file);
      this.type === "change" && this.file && this.submit();
    },
    getSize: function (obj) {
      let size = 0;
      const ua = window.navigator.userAgent; 
      if (ua.indexOf("MSIE") > -1){
        // ie9报错
        var image = new Image();
        image.dynsrc = obj.value;
        size = image.fileSize;
      } else {
        size = obj.files[0].size;
      }
      return size
    },
    submit: function () {
      if (this.type !== "change" && this.type !== "wait") return false;
      if (!this.file) {
        this.$Message.error("请选择上传文件");
        return false;
      }
      this.$emit('beforeUpload')
      this.$refs["k-upload-form"].submit();
    },
    complite: function (fm, e) {
      let doc = fm.contentWindow || fm.contentDocument;
      let data = ''
      try {
        if (doc.document) {
          doc = doc.document;
          let content = doc.body.textContent;
          if (content) {
            data = eval("(" + content + ")");
            this.$emit("complite", data);
            this.$refs["k-upload-file"].value = "";
            // this.select = false;
            this.file = null;
          }
        }
      } catch (e) {
        let msg = e.message.indexOf("cross-origin") >= 0 ? "不支持跨域上传!" : "上传文件格式不支持！";
        this.$Message.error(msg);
        data = e.message
      }
      this.$emit('afterUpload', data)
    }
  }
};
</script>

