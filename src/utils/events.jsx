/**
 * @author YuLiang
 * update  2020-06-06
 * <a href="YuriyPikachu@163.com">Contact me</a>
 * 超级掌柜页面
 */
class Events {
  constructor() {
    this.events = {}
  }

  //监听
  on(eventName, callback) {
    if (this.events[eventName]) {
      //存在事件
      this.events[eventName].push(callback)
    } else {
      //不存在事件
      this.events[eventName] = [callback]
    }
  }

  //触发
  emit(eventName, params) {
    if (this.events[eventName]) {
      this.events[eventName].map((callback) => {
        callback(params)
      })
    }
  }
}

export default Events
