document.querySelector("#about .jou").innerHTML=((new showdown.Converter()).makeHtml((function(nya_markdown){
  return (nya_markdown.toString().split('\n').slice(1,-1).join('\n'));
})(function(){/*

<p class="tip">
这是初代core留下的一行信息：<br>
【位于███████的错误内容：信息删除】<br>
好吧，我给忘掉了……
</p>
很简单的一个世界。

gomoku
继承自：gomoku（assorted，什锦，五目，ごもく），windring（风铃），baitieyi（Beate'i White，白铁翼）
新的扩展：柯立芝

<p class="tip">
这是一个约定：人只能自己救自己。
</p>

在下文中，我将在中文语境中尽量使用全角字符，并且尽量避免使用'.'句号。

### About Me

东大陆的一个学生，使用着东八区的时间，十七八岁的骨龄。偶尔打打LL，偶尔补补番。学业繁重，奔走于几个组织之间，乐此不疲（实际上快支撑不住了）。
喜欢的人是战场原，届不到的。
我在about.me的页面[about.me/gomoku](https://about.me/gomoku "")
邮箱：lika@assorted.pw

### My Links

除了能在本页他处找到的信息外：
在以下地方偶尔（从来不）写写东西（除了第一个外大概是空的）：  
[Koishumi](http://assorted.pw/Koishumi/#!/home "")  
[shimeru](https://baitieyi.coding.me/assorted/tree/ "")  
[blogspot](https://windring217.blogspot.com/ "")  
[jianshu](http://www.jianshu.com/u/f4c07e04cc40 "")  
[lofter](http://gomoku.lofter.com/ "")  
在以下社区偶尔（从来不）活动：  
[google+](https://plus.google.com/u/0/108265196773712975362 "")  
[instagram](https://www.instagram.com/baitieyi/ "")  
[facebook](https://www.facebook.com/tieyi.white "")  

### 将要做

学习Mathematic和Matlab。Mathematic真的太棒了！

*/})));
