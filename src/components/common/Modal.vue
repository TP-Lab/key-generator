<template>
  <div class="modal d-flex flex-column ai-center jc-center">
    <div class="modal-content d-flex ai-center jc-center">
      <div class="content">
        <img src="../../assets/modal-img.png" />
        <div class="desc1">{{ $t('follow.desc1') }}</div>
        <div class="desc2">{{ $t('follow.desc2') }}</div>
        <a :href="url" @click="$emit('close')" target="_blank" class="button">
          {{ $t('follow.desc3') }}
        </a>
      </div>
      <img
        class="close"
        src="../../assets/close-modal.png"
        @click="$emit('close')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 9998;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-content {
    position: relative;
    background: #fff;
    width: 440px;
    border-radius: 8px;
    .content {
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 6px;
      padding: 032px 32px 036px;
      background: linear-gradient(180deg, #e8f4ff, rgba(255, 255, 255, 0) 100%);
      img {
        width: 171px;
        height: 97px;
      }
      .desc1 {
        margin: 25px 0 8px;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        color: #eb5757;
      }
      .desc2 {
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        color: #828282;
      }
      .button {
        margin-top: 40px;
        padding: 16px 76px;
        background: #2980fe;
        border-radius: 8px;
        font-size: 14px;
        text-align: center;
        color: #ffffff;
        cursor: pointer;
      }
    }
    .close {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 767px) {
  .modal {
    .modal-content {
      width: 75%;
      border-radius: 8px;
      .content {
        border-radius: 8px;
        img {
          width: 120px;
          height: 74px;
        }
        .desc1 {
          font-size: 16px;
        }
        .desc2 {
          font-size: 14px;
        }
        .button {
          margin-top: 20px;
          padding: 8px 38px;
          background: #2980fe;
          border-radius: 4px;
          font-size: 15px;
        }
      }
      .close {
        width: 14px;
        height: 14px;
      }
    }
  }
}
</style>