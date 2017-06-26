# this repo just for practicing

* 用了vuex，但是模式不对。这里只想用全局的变量来保存token，localstorage就够用了。vuex只会变得复杂(需要多组件间同步，跨组件状态变化的场合才考虑等复杂状态才考虑用，甚至可以用全局的Vue来做简单状态管理，但这样貌似做不到状态同步)
* vue router. 拼错几次单词，找了N久没找出问题。route中有meta data，可以用这个来做中间件，比如说需要登录啊之类的等等
* components 通常用来放通用组件，之前views等都放在了components文件夹下,尝试写了个editor的组件。类似于通用函数
* simplemde + github-markdown-css 做文字输入,还能凑合着用,隐约感觉会有xss问题
* 尝试了material design,有muse-ui，vuetify。muse-ui找layout的时候，没有看到类似grid offset功能，而且好多bug的样子(看的issue,gitter chat 不怎么活跃),换成了vuetify。适用下来，感觉还不错，有比较完整的样式框架,文档吗，感觉有点不适应，太多的slot，slot的具体用法都没描述，但很多东西都是slot来嵌套.效果要比单纯的elementui要好看。elementui用着顺手，文档也不错，活跃度很高
* 还是需要写css，要不太丑了