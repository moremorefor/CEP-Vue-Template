<template lang="html">
  <div>

    <h4 class="headline">Brush</h4>

    <div class="wrapper">
      <button @click='helloAlert' class='topcoat-button--cta'>HelloWorld</button>
      <button @click='helloHistoryCall' class='topcoat-button--cta'>SuspendHistory version</button>
    </div>

    <div class="space"></div>

    <div class="line"></div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store/index'
import JSXInterface from '../jsxinterface'
const jsxInterface = JSXInterface.getInstance()

export default {
  name: 'Buttons',
  components: {},
  props: ['config'],
  data() {
    return {}
  },
  methods: {
    helloAlert() {
      jsxInterface.evaluateJSX('jsxAlert', {
        content: 'Hello World'
      })
    },
    helloHistoryCall() {
      jsxInterface.evaluateJSX('historyCall', {
        func: 'jsxAlert',
        params: {
          content: 'Hello World'
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    display: flex
    flex-wrap: wrap
    margin: 0 0 1em 0
    button
      margin: 0 1em 0.7em 0
      font-weight: bold
  .headline
    color: #ccc
    font-size: 0.8em
    text-align: left
    margin-bottom: 0.8em
  .space
    content: ""
    height: 10px
  .line
    width: 100%
    height: 1px
    background: #aaa
    margin: 5px 0 10px 0
</style>
