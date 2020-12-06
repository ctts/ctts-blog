# VSCode用户代码片段

## 前言

在使用Vue时，你是否经常为模板的初始化而烦恼？每次手动编写`<template>`，`<script>`时是否想砸键盘？万能的VSCode早就为我们解决了这个问题，年轻的我一直不知道，直到现在才发现这个功能，写一次模板就浪费半分钟，至今得浪费了多少时间？为我以前浪费的人生感到惭愧。

## 用户片段

在VSCode中，模板的名字是用户片段（snippets）

具体位置在 **文件>首选项>用户片段**, 点开之后会弹出以下界面。

<img src="https://s1.ax1x.com/2020/07/13/UJOion.png" alt="UJOion.png" border="0" />

可以看到，vscode不仅仅支持Vue，也支持其他语言的代码片段设置。接下来就以Vue的模板为例，事先一段代码片段。

搜索并打开`vue.json`,可以看到以下的提示

```json
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
}
```

英语不错的小伙伴看到这里应该就已经学会使用`snippet`了，因为它的绝大部分语法已经都告诉你了（就是那么简单），但是秉着为英语不好的同学负责的态度，还是从头实现一遍。

代码片段的基本框架：

```json
{
	"Print to console": {
		"prefix": "", // 触发snippet的关键字
		"body": [ // 自动生成的代码模板
		],
		"description": "" // 在vscode中的描述
	}
}
```

以上几个点是代码片段的必需品，接下来来实现`Vue`的`template`

```json
{
	"Print to console": {
		"prefix": "vue", // 触发snippet的关键字
		"body": [ // 自动生成的代码模板
			"<!-- $1 -->",
			"<template>",
			"  <div>$2</div>",
			"</template>",
			"",
			"<script>",
			"",
			"export default {",
			"  components: {},",
			"  props: {},",
			"  data() {",
			"    return {",
			"",
			"    };",
			"  },",
			"  computed: {},",
			"  created() {},",
			"  mounted() {},",
			"  methods: {}",
			"};",
			"</script>",
			"",
			"<style lang='scss' scoped>",
			"$3",
			"</style>"
		],
		"description": "create vue template" // 在vscode中的描述
	}
}
```

代码每一行都使用字符串来包裹，以数组的形式存储。

内容很好看懂，但是不太懂的是那些 $ 符号，上面的注释也很详细了，$1代表生成代码后光标的位置，      $2 就是在 1 的位置按 tab 键后光标的位置。

## 使用方法

新建一个 `.vue ` 文件,输入 vue ，可以看到对应的代码提示，回车即可，原本需要半分钟的代码，现在1秒就能生成！赶紧去告别手敲模板吧！

## 最后

不仅仅是 vue 文件，一些高重复度的代码都可以使用这个方法进行快速生成，如`console.log()`，果然**懒惰才是程序员前进的动力啊！**