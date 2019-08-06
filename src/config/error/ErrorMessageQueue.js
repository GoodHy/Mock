import { Message } from 'element-ui';

export default class ErrorMessageQueue {
  constructor(props) {
    this.queue = [];
    this.isShow = false;
    console.log('ErrorMessageQueue Init ==>', this.queue);
  }

  //将错误文字放置到队列中,同时开始从队列中依次取出错误信息并显示
  push(message) {
    this.queue.push(message);
    this.toast();
  }

  //弹出Message
  toast() {
    if (this.queue.length === 0 || this.isShow) {
      return;
    }
    this.isShow = true;
    //使用Message弹窗来显示错误信息,后期可以变更为其他表现形式
    Message({
      message: this.queue.shift(),
      type: 'error',
      duration: 2000,
      showClose: true,
      onClose: () => {
        this.isShow = false;
        this.toast();
      }
    });
  }

  //重置消息队列
  reset() {
    this.queue = [];
    this.isShow = false;
  }
}
