const Mock = require('mockjs');
const Random = Mock.Random;
Random.cname()
const produceData = function(opt){
    console.info('opt',opt);
    let articles = [];
    for(let i=0;i<30;i++){
      let newArticleObject = {
          title:Random.csentence(5,30),
          thunbnail_pic_s:Random.dataImage('200x200','mock的图片'),
          author_name:Random.cname(),
          date:Random.date()+ ' '+Random.time(),
          email:Random.email(),
          name:Random.cname()
      }
      articles.push(newArticleObject)
    }
    return {
        data:articles
    }
}
//获取城市信息
let city_template = {
    'title': 'Syntax Demo',

    'string1|1-10': '★',
    'string2|3': 'value',

    'number1|+1': 100,
    'number2|1-100': 100,
    'number3|1-100.1-10': 1,
    'number4|123.1-10': 1,
    'number5|123.3': 1,
    'number6|123.10': 1.123,

    'boolean1|1': true,
    'boolean2|1-2': true,

    'object1|2-4': {
        '110000': '北京市',
        '120000': '天津市',
        '130000': '河北省',
        '140000': '山西省'
    },
    'object2|2': {
        '310000': '上海市',
        '320000': '江苏省',
        '330000': '浙江省',
        '340000': '安徽省'
    },

    'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
    'array2|1-10': ['Mock.js'],
    'array3|3': ['Mock.js'],

    'function': function() {
        return this.title
    }
}
export default {
    city_template,
    produceData
}