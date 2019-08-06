## 前端项目部署方式

目前我们很多项目还都是手动部署,部署的时候容易出错,还会引起网站短时间不可用.所以,我们将部署的工作放到jenkins上,让jenkins代替我们打包/发送至服务器/上传静态资源至cdn.现在整理了一下自动化部署的方式,分为静态网站部署和动态网站部署两部分.

自动化部署的思路如下:

1.触发构建(手动触发,代码仓库更新触发,其他项目构建触发);
2.jenkins从代码仓库获取代码;
3.根据参数执行构建命令;
4.构建成功,将构建产物通过ftp等方式发送到目标服务器;
5.在目标服务器执行python脚本,将静态资源发送至cdn,并删除本地静态资源;
6.如果是静态网站,操作服务器软连接,将软连接指向新的网站目录;如果是动态网站,还要操作渲染服务器重新进行服务端喧嚷.

### 一.静态网站部署
[Jenkins示例-供应链项目](http://jenkins.erp.itsmycar.cn:8082/job/example-yiautos-scf-wap/)

#### 1.定义环境变量

推荐使用两个环境变量:网站目录名 cdn版本号

![image](http://images.itsmycar.cn/1560994865600.jpg)

环境变量参数在配置中可以通过前缀'$'引用,例如:$versionCode

其中网站目录名会作为静态网站在服务端的目录名

cdn版本号会作为网站引用的静态资源的目录的前缀,例如:

http://websitedn.yiautos.com/website/test/v06192324/vendor.a6df2d44a049ef7562f3.js

其中的http://websitedn.yiautos.com/是我们cdn的固定地址

其中的website/test/v06192304 就是需要输入的cdn版本号

后面的vendor.a6df2d44a049ef7562f3.js就是我们实际的静态资源了.

#### 2.设置代码仓库

需要配置代码仓库的地址与有权限访问该仓库的git账号

![image](http://images.itsmycar.cn/1560994897962.jpg)

还需要指定分支,如果是正式环境,固定为master分支,如果是测试环境或开发环境,建议将分支参数化,加在环境变量中

#### 3.构建环境与构建

![image](http://images.itsmycar.cn/1560994938450.jpg)

前端项目必选node环境,建议版本号8.10

构建命令,根据项目的不同稍作改变,以vue-cli3创建的项目为例:

```
echo $PATH &&
npm config get registry &&
npm config set registry http://r.cnpmjs.org/ &&
node -v &&
npm -v &&
npm install &&
npm run build -- --$versionCode &&
tar -czvf dist.tar.gz ./dist
```

构建的流程大致相同,都是安装依赖-执行构建-将构建产物打包

#### 4.上传构建产物到服务器

![image](http://cdn.itsmycar.cn/1560997706787.jpg)

服务器的环境要预先配置好,包括服务器ip/密码/根目录等

需要将我们在刚才构建中打的压缩包上传到服务器的指定目录,我这里用了一个临时缓存文件夹holder,方便做文件移动/解压

```
cd /var/www &&
rm -rf $dirName &&
mkdir $dirName &&

tar -zxvf /var/www/holder/dist.tar.gz -C /var/www/$dirName/ &&
cd /var/www/holder && rm -rf dist.tar.gz &&

python /var/python/uploader/index.py yiauto-cdn $versionCode /var/www/$dirName/dist &&

rm -rf  /var/www/yiautos-scf-wap &&
cd /var/www &&

ln -s /var/www/$dirName yiautos-scf-wap
```

每次构建,相当于在服务端新建了一个网站目录,我们在脚本的最后将nginx的网站root的软链接指向了我们最新的网站目录,旧的网站暂时保留在服务器方便回滚.

![image](http://images.itsmycar.cn/WX20190619-185806.png)

![image](http://cdn.itsmycar.cn/1560997596238.jpg)

#### 5.构建后检查

构建后要检查本次构建的控制台输出,需要关注以下几个部分

推荐在构建时执行单元测试命令

##### (1) 从代码仓库拉取的代码,是否是最新的版本;



##### (2) npm install是否成功

##### (3) 构建是否成功(是否出现error,warning会导致jenkins认为构建失败,但实际是成功的,如果不想出现warning,要在项目中配置build模式忽略warning)

##### (4) ssh命令是否执行成功

##### (5) python命令是否执行成功

然后可以登录项目网站,进行总体验证.注意要点击查看页面代码检查下静态资源的路径,是否与我们在jenkins构建时填写的cdn版本号一致




### 二.服务端渲染网站部署
[Jenkins示例-官网项目](http://jenkins.erp.itsmycar.cn:8082/job/example-yiautos-website2/)

服务端渲染的网站,在构建时和静态网站大概相同,不同的地方主要在传到服务器之后,有以下需要注意的地方.

#### 1.服务端渲染的项目除静态资源外,还要上传其他文件

以Nuxt.js构建的服务端渲染项目为例,如果想在服务端运行,需要以下几个文件/文件夹:

1. .nuxt文件:这是服务端脚本,其中包含静态资源,我们会将其中的静态资源放在cdn上,仅保留服务端文件
2. package.json文件:用于提供运行命令与依赖描述
3. modules文件夹:存放模块描述文件
4. static文件夹:存放未打包的静态资源
5. nuxt.config.js:项目配置文件
6. node_modules文件夹:第三方依赖库

其中除node_modules是通过命令生成的外,其他几个文件都需要上传到服务器

#### 2.部署方式不同

静态网站的访问,直接使用nginx访问到项目根目录的软链接,而动态网站是通过pm2在指定端口运行服务,通过nginx的proxy_pass做端口转发.

![image](http://cdn.itsmycar.cn/1560997504161.jpg)

动态网站的静态资源目录位于.nuxt/dist/文件夹下,使用python上传的时候要指定该文件夹上传

```
cd /var/www/yiautos-website2 &&
rm -rf modules &&
mv /var/www/holder/modules /var/www/yiautos-website2
cd /var/www/holder && rm -rf modules &&

cd /var/www/yiautos-website2 &&
npm install &&
python /var/python/uploader/index.py yiautos-website-cdn  $version /var/www/yiautos-website2/.nuxt/dist &&

pm2 restart 0
```

### 三.注意事项

#### 1. 七牛上传python脚本要提前上传到服务器指定目录下,并执行以下代码安装依赖:

```
pip install qiniu
pip install glob2
pip install --update (缺少的其他系统依赖)
```

#### 2. 服务端渲染的网站,第一次构建前要先在服务器搭建好pm2环境,并给pm2项目指定name与id

```
pm2 start npm --name yiautos-website-prod -- start
```

![image](http://cdn.itsmycar.cn/1560997540305.jpg)

服务端渲染的项目如果没有做好内存控制,易发生内存泄漏,需要经常监控服务器内存情况.