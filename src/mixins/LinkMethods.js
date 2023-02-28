const LinkMethods = {
  date () {
    return {

    }
  },

  methods: {
    indexGo (url) {
      this.$router.replace('/')
    },

    linkGo (url) {
      // this.$router.push(this.$i18n.path(url))
    }
  }
}

export default LinkMethods
