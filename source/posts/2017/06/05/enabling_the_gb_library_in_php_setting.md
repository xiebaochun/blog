===
{
    "title":"enabling the gb library in php setting",
    "author":"xiebaochun",
    "categories":["php"],
    "tags":["php","gd"],
    "createtime":"6/5/2017"
}
===
# 在PHP中开启GD模块设置

在PHP服务中，很多功能都需要启用GD库来实现。比如你需要GD库在网站的某些地方来显示图形验证码。

PHP默认安装，是已经启用了GD库的。

如果你的PHP服务并没有启用GD库，下面就介绍一下如何来启用它。

#### 首先，怎么判断GD开启了呢？

你可以在你的php服务器里新建一个简单的phpinfo页面来查看GD库是否已经启用。

1.创建一个名为phpinfo.php的文件。

2.用Notepad打开这个文件，或者用你喜欢的WYSIWYG编辑器，比如Dreamweaver,sublime text等。

3.在文件中添加如下代码：

`
<?php
	phpinfo();
?>
 `

 4.在本地的web服务器中保存你的文件。

 5.打开浏览器，如Firefox/chrome 或者 Internet Explorer。

 6.在地址栏中，输入这个文件的url地址。
 通常，在你本地的测试服务器中，这个url是http://localhost/phpinfo.php.

 7.如果GD库可用的话，结果页面中应该会显示如下部分。

 ![](http://www.webassist.com/community/tutorials/attachments/120/427/var/www/vhosts/webassist.com/user_uploads/tutorials/attachments/120/427/proportion/gd_02_w634_h400/gd_02_09250649.png)

如果你没有看到上面这部分，请参考PHP帮助文档的步骤来安装GD库。

[http://us2.php.net/manual/en/image.installation.php](http://us2.php.net/manual/en/image.installation.php)

### 下面是安装GD的一些例子。

#### Window服务器

1.用Nodepad打开你的PHP.ini文件，或者其他WYSIWYG编辑器。
	此文件通常位于C:\Windows\目录下

2.找到如下这行。

`;extension=php_gd2.dll`

3.移除前面的分号(;)来启用这个配置项。

4.保存这个文件。

5.重启web服务器。


#### Ubuntu Linux

1.运行如下命令行安装GD库:

`sudo apt-get install php5-gd`

2.重启Apache服务器。

#### Mac OSX

对于苹果用户来说，一旦安装好了PHP,要想启用GD库的话，就没有那么简单的解决方案了。然而，我们推荐使用MAMP套件，你可以通过如下链接来获取。

[http://www.mamp.info/en/downloads/index.html](http://www.mamp.info/en/downloads/index.html)

使用MAMP，你可以安装Apache，Mysql和PHP来进行本地网站测试。




