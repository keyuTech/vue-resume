
var app = new Vue({
  el: '#app',
  data: {
    resume: {
      name: '姓名',
      gender: '性别',
      age: '年龄',
      phone: '手机',
      email: '邮箱',
      position: '应聘职位',
      worktime: '全职or实习',
      starttime: '入职时间'
    }
  },
  methods: {
    onEdit(key, value){
      this.resume[key] = value
    }
  }
})