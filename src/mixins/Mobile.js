export default {
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|TokenPocket|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  }
}
