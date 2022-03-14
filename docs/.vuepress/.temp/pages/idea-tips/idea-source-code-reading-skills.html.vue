<template><h1 id="idea源码阅读技巧" tabindex="-1"><a class="header-anchor" href="#idea源码阅读技巧" aria-hidden="true">#</a> IDEA源码阅读技巧</h1>
<p>项目有个新来了一个小伙伴，他看我查看项目源代码的时候，各种骚操作“花里胡哨”的。于是他向我请教，想让我分享一下我平时使用 IDEA 看源码的小技巧。</p>
<h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2>
<p>这一部分的内容主要是一些我平时看源码的时候常用的快捷键/小技巧！非常好用！</p>
<p>掌握这些快捷键/小技巧，看源码的效率提升一个等级！</p>
<h3 id="查看当前类的层次结构" tabindex="-1"><a class="header-anchor" href="#查看当前类的层次结构" aria-hidden="true">#</a> 查看当前类的层次结构</h3>
<table>
<thead>
<tr>
<th>使用频率</th>
<th>相关快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>⭐⭐⭐⭐⭐</td>
<td><code>Ctrl + H</code></td>
</tr>
</tbody>
</table>
<p>平时，我们阅读源码的时候，经常需要查看类的层次结构。就比如我们遇到抽象类或者接口的时候，经常需要查看其被哪些类实现。</p>
<p>拿 Spring 源码为例，<code>BeanDefinition</code> 是一个关于 Bean 属性/定义的接口。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BeanDefinition</span> <span class="token keyword">extends</span> <span class="token class-name">AttributeAccessor</span><span class="token punctuation">,</span> <span class="token class-name">BeanMetadataElement</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果我们需要查看 <code>BeanDefinition</code> 被哪些类实现的话，只需要把鼠标移动到 <code>BeanDefinition</code> 类名上，然后使用快捷键 <code>Ctrl + H</code> 即可。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210527135533686.png" alt="" loading="lazy"></p>
<p>同理，如果你想查看接口 <code>BeanDefinition</code> 继承的接口 <code>AttributeAccessor</code> 被哪些类实现的话，只需要把鼠标移动到 <code>AttributeAccessor</code> 类名上，然后使用快捷键 <code>Ctrl + H</code> 即可。</p>
<h3 id="查看类结构" tabindex="-1"><a class="header-anchor" href="#查看类结构" aria-hidden="true">#</a> 查看类结构</h3>
<table>
<thead>
<tr>
<th>使用频率</th>
<th>相关快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>⭐⭐⭐⭐</td>
<td><code>Alt + 7</code>(Win) / <code>Command +7</code> （Mac）</td>
</tr>
</tbody>
</table>
<p>类结构可以让我们快速了解到当前类的方法、变量/常量，非常使用！</p>
<p>我们在对应的类的任意位置使用快捷键 <code>Alt + 7</code>(Win) / <code>Command +7</code> （Mac）即可。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210527135552183.png" alt="" loading="lazy"></p>
<h3 id="快速检索类" tabindex="-1"><a class="header-anchor" href="#快速检索类" aria-hidden="true">#</a> 快速检索类</h3>
<table>
<thead>
<tr>
<th>使用频率</th>
<th>相关快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>⭐⭐⭐⭐⭐</td>
<td><code>Ctrl + N</code> (Win) / <code>Command + O</code> （Mac）</td>
</tr>
</tbody>
</table>
<p>使用快捷键 <code>Ctrl + N</code> (Win) / <code>Command + O</code> （Mac）可以快速检索类/文件。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210527135629367.png" alt="" loading="lazy"></p>
<h3 id="关键字检索" tabindex="-1"><a class="header-anchor" href="#关键字检索" aria-hidden="true">#</a> 关键字检索</h3>
<table>
<thead>
<tr>
<th>使用频率</th>
<th>相关快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>⭐⭐⭐⭐⭐</td>
<td>见下文</td>
</tr>
</tbody>
</table>
<ul>
<li>当前文件下检索 ： <code>Ctrl + F</code> (Win) / <code>Command + F</code> （Mac）</li>
<li>全局的文本检索 : <code>Ctrl + Shift + F</code> (Win) / <code>Command + Shift + F</code> （Mac）</li>
</ul>
<h3 id="查看方法-类的实现类" tabindex="-1"><a class="header-anchor" href="#查看方法-类的实现类" aria-hidden="true">#</a> 查看方法/类的实现类</h3>
<table>
<thead>
<tr>
<th>使用频率</th>
<th>相关快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>⭐⭐⭐⭐</td>
<td><code>Ctrl + Alt + B</code> (Win) / <code>Command + Alt + B</code> (Mac)</td>
</tr>
</tbody>
</table>
<p>如果我们想直接跳转到某个方法/类的实现类，直接在方法名或者类名上使用快捷键 <code>Ctrl + Alt + B/鼠标左键</code> (Win) / <code>Command + Alt + B/鼠标左键</code> (Mac) 即可。</p>
<p>如果对应的方法/类只有一个实现类的话，会直接跳转到对应的实现类。</p>
<p>比如 <code>BeanDefinition</code> 接口的 <code>getBeanClassName()</code> 方法只被 <code>AbstractBeanDefinition</code> 抽象类实现，我们对这个方法使用快捷键就可以直接跳转到 <code>AbstractBeanDefinition</code> 抽象类中对应的实现方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BeanDefinition</span> <span class="token keyword">extends</span> <span class="token class-name">AttributeAccessor</span><span class="token punctuation">,</span> <span class="token class-name">BeanMetadataElement</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Nullable</span>
	<span class="token class-name">String</span> <span class="token function">getBeanClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果对应的方法/类有多个实现类的话，IDEA 会弹出一个选择框让你选择。</p>
<p>比如 <code>BeanDefinition</code> 接口的 <code>getParentName()</code> 方法就有多个不同的实现。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210527135703164.png" alt="" loading="lazy"></p>
<h3 id="查看方法被使用的情况" tabindex="-1"><a class="header-anchor" href="#查看方法被使用的情况" aria-hidden="true">#</a> 查看方法被使用的情况</h3>
<table>
<thead>
<tr>
<th>使用频率</th>
<th>相关快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>⭐⭐⭐⭐</td>
<td><code>Alt + F7</code></td>
</tr>
</tbody>
</table>
<p>我们可以通过直接在方法名上使用快捷键 <code>Alt + F7</code> 来查看这个方法在哪些地方被调用过。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210527135712962.png" alt="" loading="lazy"></p>
<h3 id="查看最近使用的文件" tabindex="-1"><a class="header-anchor" href="#查看最近使用的文件" aria-hidden="true">#</a> 查看最近使用的文件</h3>
<table>
<thead>
<tr>
<th>使用频率</th>
<th>相关快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>⭐⭐⭐⭐⭐</td>
<td><code>Ctrl + E</code>(Win) / <code>Command +E</code> （Mac）</td>
</tr>
</tbody>
</table>
<p>你可以通过快捷键 <code>Ctrl + E</code>(Win) / <code>Command +E</code> （Mac）来显示 IDEA 最近使用的一些文件。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210527135733816.png" alt="" loading="lazy"></p>
<h3 id="查看图表形式的类继承链" tabindex="-1"><a class="header-anchor" href="#查看图表形式的类继承链" aria-hidden="true">#</a> 查看图表形式的类继承链</h3>
<table>
<thead>
<tr>
<th>使用频率</th>
<th>相关快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>⭐⭐⭐⭐</td>
<td>相关快捷键较多，不建议记</td>
</tr>
</tbody>
</table>
<p>点击类名 <strong>右键</strong> ，选择 <strong>Shw Diagrams</strong> 即可查看图表形式的类继承链。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210527135745518.png" alt="" loading="lazy"></p>
<p>你还可以对图表进行一些操作。比如，你可以点击图表中具体的类 <strong>右键</strong>，然后选择显示它的实现类或者父类。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210527135757163.png" alt="" loading="lazy"></p>
<p>再比如你还可以选择是否显示类中的属性、方法、内部类等等信息。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210527135902827.png" alt="" loading="lazy"></p>
<p>如果你想跳转到对应类的源码的话，直接点击图表中具体的类 <strong>右键</strong> ，然后选择 <strong>Jump to Source</strong> 。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210527135807668.png" alt="" loading="lazy"></p>
<h2 id="插件推荐" tabindex="-1"><a class="header-anchor" href="#插件推荐" aria-hidden="true">#</a> 插件推荐</h2>
<h3 id="一键生成方法的序列图" tabindex="-1"><a class="header-anchor" href="#一键生成方法的序列图" aria-hidden="true">#</a> 一键生成方法的序列图</h3>
<p><strong>序列图</strong>（Sequence Diagram），亦称为<strong>循序图</strong>，是一种 UML 行为图。表示系统执行某个方法/操作（如登录操作）时，对象之间的顺序调用关系。</p>
<p>这个顺序调用关系可以这样理解：你需要执行系统中某个对象 a 提供的方法/操作 login（登录），但是这个对象又依赖了对象 b 提供的方法 getUser(获取用户)。因此，这里就有了 a -&gt; b 调用关系之说。</p>
<p>我们可以通过 <strong>SequenceDiagram</strong> 这个插件一键生成方法的序列图。</p>
<blockquote>
<p>如果你因为网络问题没办法使用 IDEA 自带的插件市场的话，也可以通过 IDEA 插件市场的官网手动下载安装。</p>
</blockquote>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/2021052218304014.png" alt="" loading="lazy"></p>
<p><strong>如何使用呢？</strong></p>
<p>1、选中方法名（注意不要选类名），然后点击鼠标右键，选择 <strong>Sequence Diagram</strong> 选项即可！</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20201021170110697.png" alt="" loading="lazy"></p>
<p>2、配置生成的序列图的一些基本的参数比如调用深度之后，我们点击 ok 即可！</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/c5040f1105c762ddf8689892913bc02d.png" alt="" loading="lazy"></p>
<p>3、你还可以通过生成的时序图来定位到相关的代码，这对于我们阅读源码的时候尤其有帮助！</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20201021171623809.png" alt="" loading="lazy"></p>
<p>4、时序图生成完成之后，你还可以选择将其导出为图片。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20201021170228723.png" alt="" loading="lazy"></p>
<p>相关阅读：<a href="https://mp.weixin.qq.com/s/SG1twZczqdup_EQAOmNERg" target="_blank" rel="noopener noreferrer">《安利一个 IDEA 骚操作:一键生成方法的序列图》<ExternalLinkIcon/></a> 。</p>
<h3 id="项目代码统计" tabindex="-1"><a class="header-anchor" href="#项目代码统计" aria-hidden="true">#</a> 项目代码统计</h3>
<p>为了快速分析项目情况，我们可以对项目的 <strong>代码的总行数、单个文件的代码行数、注释行数等信息进行统计。</strong></p>
<p><strong>Statistic</strong> 这个插件来帮助我们实现这一需求。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210522183550110.png" alt="" loading="lazy"></p>
<p>有了这个插件之后你可以非常直观地看到你的项目中所有类型的文件的信息比如数量、大小等等，可以帮助你更好地了解你们的项目。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210522183616310.png" alt="" loading="lazy"></p>
<p>你还可以使用它看所有类的总行数、有效代码行数、注释行数、以及有效代码比重等等这些东西。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/idea/20210522183630459.png" alt="" loading="lazy"></p>
<p>如果，你担心插件过多影响 IDEA 速度的话，可以只在有代码统计需求的时候开启这个插件，其他时间禁用它就完事了！</p>
<p>相关阅读：<a href="https://mp.weixin.qq.com/s/fVEeMW6elhu79I-rTZB40A" target="_blank" rel="noopener noreferrer">快速识别烂项目！试试这款项目代码统计 IDEA 插件<ExternalLinkIcon/></a></p>
</template>
