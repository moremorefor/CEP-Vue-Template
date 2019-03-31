<template>
  <div id="app">

    <Buttons :config='config' />
    <Config :config='config' />

  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from './store/index'
import Buttons from './commponents/Buttons'
import Config from './commponents/Config'

export default {
  name: 'App',
  components: {
    Buttons,
    Config
  },
  created() {
    this.$store.dispatch('root/fetchConfig').then(() => {
      console.log('root/fetchConfig')
    })
  },
  computed: {
    ...mapState('root', ['config'])
  }
}
</script>

<style lang='sass' scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  margin-top: 20px
</style>
