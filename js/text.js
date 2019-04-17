document.querySelector("#about .jou").innerHTML=((new showdown.Converter()).makeHtml((function(nya_markdown){
  return (nya_markdown.toString().split('\n').slice(1,-1).join('\n'));
})(function(){/*

<p class="tip">
这是初代core留下的一行信息：<br>
【位于███████的错误内容：信息删除】<br>
好吧，我给忘掉了……
</p>

gomoku
继承自：alex（已删除），gomoku（assorted，什锦，五目，ごもく），windring（风铃），baitieyi（Beate'i White，白铁翼）。

<p class="tip">
这是一个约定：人只能自己救自己。
</p>

### About Me

东大陆的一个学生，使用着东八区的时间。  
现在喜欢的番剧是```Caligula```。  
喜欢的人是战场原，届不到的。  
过去半年在做NKOJ的前端开发。  
过去几个月在学NLP，快放弃了。  
择日更新assorted。  
我在about.me的页面[about.me/gomoku](https://about.me/gomoku)  
邮箱：baitieyi@outlook.com
邮件请加急  

### Org

[aclius](https://github.com/acliusBackHome/)

### Links

除了能在本页他处找到的信息外：  
在以下地方偶尔写写东西：  
[blog](http://blog.assorted.pw)  
[Koishumi](http://windring.github.io/Koishumi/#!/home)  
[shimeru](https://baitieyi.coding.me/assorted/tree/)  
[blogspot](https://windring217.blogspot.com/)  
[jianshu](http://www.jianshu.com/u/f4c07e04cc40)  
[lofter](http://gomoku.lofter.com/)  
在以下社区偶尔活动：  
[google+](https://plus.google.com/u/0/108265196773712975362)  
[instagram](https://www.instagram.com/baitieyi/)  
[facebook](https://www.facebook.com/tieyi.white)  

### Arts

[Lensty](http://baitieyi.coding.me/Lensty/)：实验性AVG（模因警告）。

### 更新记录

last:20180709

last:20180918

last:20181012

### 将要做

ACM！  
学习Mathematic！  
更多的前端开发！  

*/})));
