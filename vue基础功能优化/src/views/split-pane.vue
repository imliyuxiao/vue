<template>
    <div class="split-pane-con">
      <!--<split-pane :value="offset" @input="handleInput"></split-pane>--> <!-- 方法一 -->
      <!--<split-pane v-model="offset"></split-pane>--> <!-- 方法二 -->
      <split-pane :value.sync="offset">
        <div slot="left">left-TEXT</div>
        <div slot="right">right-TEXT</div>
        <div></div>
      </split-pane>  <!-- 方法三 sync -->
    </div>
</template>

<script>
import SplitPane from '_c/split-pane'
export default {
  components: {
    SplitPane
  },
  data () {
    return {
      offset: 0.8
    }
  },
  methods: {
    handleInput (value) { // 方法一
      this.offset = value
    }
  }
}
</script>

<style lang="less"> // lang='less'我们使用less预处理器来写样式
.split-pane-con{
  width: 400px;
  height: 200px;
  background: papayawhip;
}
</style>
