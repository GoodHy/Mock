import App from '../app';
const getErrorMessage = errorObject => {
  /*
  {
	"code": "40001",
	"message": "invalid request model",
	"details": {
		"code": "门店编号"
	  }
  }*/
  console.log('getErrorMessage ==>', errorObject);

  if (App.isDev) {
    let msg = errorObject.details;
    console.log('msg==>', msg);
    if (!!!msg) {
      msg = errorObject.message
        ? errorObject.message
        : '服务端异常,请稍后再试!';
    } else if (typeof msg === 'object') {
      msg = Object.values(msg);
    }
    return msg;
  } else {
    switch (errorObject.code) {
      case -1:
        return errorObject.message;
      case '40001':
        return `数据验证失败:${JSON.stringify(errorObject.details)}`;
      case 24001:
        return `数据验证失败:${JSON.stringify(errorObject.details)}`;
      case 10602001:
        return `${errorObject.message}`;
      case 11101004:
        return `${errorObject.message}`;
      case 24005:
        return `${errorObject.message},请检查表单参数!`;
      case 52003:
        return `${errorObject.message}`;
      default:
        return errorObject.message
          ? errorObject.message
          : '服务端异常,请稍后再试!';
    }
  }
};

export default getErrorMessage;
