<template>
  <div>
    <h4 class="headline">Config save sample</h4>
    <div class='input'>
      <input class='topcoat-text-input' ref='sampleConfig' :value="config.sampleConfig" placeholder="SampleConfig">
      <button @click='saveSampleConfig' class='topcoat-button'>Save</button>
    </div>

    <blockquote class='printData'>{{ printData }}</blockquote>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store/index'

export default {
  name: 'Config',
  props: ['config'],
  computed: {
    printData() {
      return JSON.stringify(this.config, null, '    ')
    }
  },
  methods: {
    saveSampleConfig() {
      const newData = {
        ...this.config,
        sampleConfig: this.$refs.sampleConfig.value
      }
      store.commit('root/saveConfig', newData)
    }
  }
}
</script>

<style lang='sass' scoped>
.headline
  font-size: 0.8em
  text-align: left
  margin-bottom: 0.8em

.input
  display: flex
  margin-bottom: 1rem
  input
    width: 80%

.printData
  font-size: 0.85rem
  text-align: left
</style>
