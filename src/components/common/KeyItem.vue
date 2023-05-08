<template>
  <div class="key-item" v-if="value">
    <div class="key-name">{{ title }}</div>
    <div class="key-wrap">
      <span>{{ value }}</span>
      <img src="../../assets/copy.png" alt="" @click="onCopy" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  methods: {
    onCopy() {
      this.$copyText(this.value).then((res) => {
        alert(this.$t('main.copied'));
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.key-item {
  .key-name {
    font-size: 14px;
    color: #828282;
  }
  .key-wrap {
    margin-top: 8px;
    display: flex;
    align-items: center;
    .pc {
      display: inline-block;
    }
    .mobile {
      display: none;
    }
    span {
      width: 345px;
      word-break: break-all;
      background: #f5f6f7;
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 14px;
      font-weight: 500;
      color: #3a3b3d;
    }
    img {
      margin-left: 8px;
      width: 20px;
      cursor: pointer;
    }
  }
}

@media screen and(max-width:1200px) {
  .key-item {
    .key-wrap {
      span {
        width: 100%;
      }
    }
  }
}

@media screen and(max-width:767px) {
  .key-item {
    .key-name {
      font-size: 15px;
    }
    .key-wrap {
      margin-top: 5px;
      .pc {
        display: none;
      }
      .mobile {
        display: inline-block;
      }
      span {
        width: 100%;
        font-size: 12px;
      }
    }
  }
}
</style>
