document.querySelector("#about .jou").innerHTML = ((new showdown.Converter()).makeHtml((function (nya_markdown) {
  return (nya_markdown.toString().split('\n').slice(1, -1).join('\n'));
})(function () {/*
gomoku

【信息缺失】：alex（已删除），gomoku（assorted，什锦，五目，ごもく），windring（风铃），baitieyi（Beate'i White，白铁翼）。

<p class="tip">
这是一个约定：人只能自己救自己。
</p>

<p class="tip">
这是另一个约定：【信息缺失】
</p>

### About Me

东大陆的一个学生，使用着东八区的时间。

现在喜欢的番剧是```魔法少女小圆```。

【信息删除】

择日更新 assorted 。

我在 about.me 的页面 [about.me/gomoku](https://about.me/gomoku)

邮箱：baitieyi@163.com

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

### 更新记录

last: 20180709

last: 20180918

last: 20181012

last: 20190417

last: 20190503

last: 20190908

last: 20200209

last: 20200215

last: 20200826

### 将要做

学习

*/})));
