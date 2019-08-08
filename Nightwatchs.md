配置 Nightwatch

要了解Nightwatch的配置和用法，与前文介绍Mocha一样，应该先从工程结构入手。

工程结构

.
└── test
      └── e2e
            ├── custom-assertions     // 自定义断言
            │    └── elementCount.js
            ├── page-objects          // 页面对象文件夹
            ├── reports               // 输出报表文件夹
            ├── screenshots           // 自动截屏
            ├── nightwatch.conf.js    // nightwatch 运行配置
            ├── runner.js             // 运行器
            └── specs                 // 测试文件
                  └── test.spec.js
### 单员测试 ###

Karma：运行器====>Mocha:测试框架=====>Chai:简单的断言库
#vue-test-utils：官方铺助测试库
1.Karma:一个专门的测试运行器（runner）
###karma-webpack 用webpack预处理文件
###karma-coverage 测试覆盖率
###karma-mocha 接入mocha测试框架
###karma-spec-reporter 输出报告
###karma-phantomjs-launcher 控制PhantomJS
###karma-phantomjs-shim 给PhantomJS兼容的控制
########################################################
var webpackConfig = require('../../build/webpack.test.conf');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'], // 测试服务浏览器
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'], // 测试框架
    reporters: ['spec', 'coverage'], // 报告输出
    files: ['./index.js'], // 文件入口，过滤掉index.html
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'] // 预处理器
    },
    webpack: webpackConfig, // 专门测试webpack配置
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      dir: './coverage', // 覆盖率配置
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
      ]
    },
  });
};
####################################################################
2.Mocha一个单员测试框架，可以兼容第三方断言库，包括：
###should.js
###expect.js
###chai
###better-assert
###unexpected

import Vue from 'vue';
import Hello from '@/components/Hello';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
  });
});
#################################################################
3.Chai一个非常简单的断言库，所谓断言，就是预期某些执行结果符合你自己的要求。所有测试用例都应该含有一句或多句断言

expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
###############################################################

4.vue-test-utils
vuejs/vue-test-utils是官方的辅助测试库。它其实即是将组件实例化的过程进行封装，帮你模拟它组件实例化过程。shallow这个函数把组件List实例化，并传入props等参数，这样，你可以断言数据绑定的结果。
const items = ['', '']
const wrapper = shallow(List, {
    propsData: { items }
})
expect(wrapper.findAll('li').length).to.equal(items.length)
###############################################################
5.vue-router和vuex的单元测试问题
项目往往都是使用vuex和vue-router进行异步获取数据，需要外部依赖。这时，我们需要inject-loader来实现对vue组件对象内部的数据模拟。假设我们有这么一个组件，它引用了一个服务，可以是同步或异步（promise），这个对象会被整体替换。
<!-- example.vue -->
<template>
  <div class="msg">{{ msg }}</div>
</template>

<script>
// this dependency needs to be mocked
import SomeService from '../service'

export default {
  data () {
    return {
      msg: SomeService.msg
    }
  }
}
</script>

首先你要安装inject-loader，通过行内写法注入该组件。
npm install inject-loader@^2.0.0 --save-dev

const ExampleInjector = require('!!vue-loader?inject!./example.vue')

在对应的spec.js中添加了需要注入的对象。../service是在组件中的依赖对象，它的结果会被替换。
const ExampleWithMocks = ExampleInjector({
  // mock it
  '../service': {
    msg: 'Hello from a mocked service!'
  }
})

端对端测试
单元测试更多是对某个组件或者js进行功能测试。端对端测试（e2e）用于模拟整个业务流程的进行自动化测试（填报，增删查改等）。vue官方推荐是使用nightwatch，它同样只是个runner，默认配置chromedriver，phantomjs。


### 端对端的测试 ###
NightWatch：运行器====>selenium:控制器

###执行测试

default e2e test类似单元测试中的describe和it的测试描述，browser则是传入的浏览器对象，这个对象可以是chrome，也可以是firefox，由selenium控制。url说明的是跳到目标路径，waitForElementVisible说明的是等待5000ms直到id为app的dom出现，然后，assert帮助你进行断言某个dom的内容。
module.exports = {
  'default e2e tests': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .end();
  },
};
