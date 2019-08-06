import Queue from './ErrorMessageQueue';

let errorQueue = null;

const errorDisplay = (err, options = { details: false }) => {
  if (!errorQueue) {
    errorQueue = new Queue(null);
  }

  if (options.details && err && err.details) {
    errorQueue.push(err.details.join('/'));
    return;
  }

  if (err && err.message) {
    //主动向错误队列中推消息,并触发显示
    errorQueue.push(err.message);
  } else {
    errorQueue.push('发生未知错误!请联系管理员!');
  }
};

export default errorDisplay;
