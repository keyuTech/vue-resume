Vue.component('editable-span', {
  props: ['value'],
  template: `
  <span class="editName">
    <span v-show="!editing">{{ value }}</span>
    <input type="text" v-show="editing" v-bind:value="value" v-on:input="triggerEdit">
    <button v-if="editing" v-on:click="editing = !editing">完成</button>
    <button v-else v-on:click="editing = !editing">编辑</button>
  </span>
  `,
  data(){
    return {
      editing: false
    }
  },
  methods: {
    triggerEdit(e){
      this.$emit('edit', e.target.value)
    }
  }
})
