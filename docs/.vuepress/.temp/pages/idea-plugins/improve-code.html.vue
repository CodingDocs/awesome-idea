<template><h2 id="lombok-帮你简化代码" tabindex="-1"><a class="header-anchor" href="#lombok-帮你简化代码" aria-hidden="true">#</a> Lombok:帮你简化代码</h2>
<p>之前没有推荐这个插件的原因是觉得已经是人手必备的了。如果你要使用 Lombok 的话，不光是要安装这个插件，你的项目也要引入相关的依赖。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用 Lombok 能够帮助我们少写很多代码比如 Getter/Setter、Constructor 等等。</p>
<p>关于 Lombok 的使用，可以查看这篇文章：<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247485385&amp;idx=2&amp;sn=a7c3fb4485ffd8c019e5541e9b1580cd&amp;chksm=cea24802f9d5c1144eee0da52cfc0cc5e8ee3590990de3bb642df4d4b2a8cd07f12dd54947b9&amp;token=1667678311&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">《十分钟搞懂 Java 效率工具 Lombok 使用与原理》<ExternalLinkIcon/></a>。</p>
<h2 id="codota-代码智能提示" tabindex="-1"><a class="header-anchor" href="#codota-代码智能提示" aria-hidden="true">#</a> Codota：代码智能提示</h2>
<blockquote>
<p>目前的话，Codota 已经更名为 <strong>Tabnine</strong> 。</p>
</blockquote>
<p>我一直在用的一个插件，可以说非常好用了（<em>我身边的很多大佬平时写代码也会用这个插件</em>）。</p>
<p>Codota 这个插件用于智能代码补全，它基于数百万 Java 程序，能够根据程序上下文提示补全代码。相比于 IDEA 自带的智能提示来说，Codota 的提示更加全面一些。</p>
<p>除了代码补全之外，Codota 还支持代码智能搜索，直接选中对应的类或者方法即可搜索相关的代码示例。</p>
<p><img src="@source/idea-plugins/pictures/Codota2.png" alt="" loading="lazy"></p>
<p>如果你觉得 IDEA 插件安装的太多比较卡顿的话，不用担心！Codota 插件还有一个对应的在线网站（<a href="https://www.codota.com/code" target="_blank" rel="noopener noreferrer">https://www.codota.com/code<ExternalLinkIcon/></a>），在这个网站上你可以根据代码关键字搜索相关代码示例，非常不错！</p>
<p>我在工作中经常会用到，说实话确实给我带来了很大便利，比如我们搜索 <code>Files.readAllLines</code>相关的代码，搜索出来的结果如下图所示：</p>
<p><img src="@source/idea-plugins/pictures/Codota3.png" alt="" loading="lazy"></p>
<p>另外，Codota 插件的基础功能都是免费的。你的代码也不会被泄露，这点你不用担心。</p>
<p>类似的插件还有阿里云智能编码插件 <strong>Cosy</strong>(Alibaba Cloud AI Coding Assistant) ，关于 Cosy 的详细介绍，可以看一下我写的 <a href="https://zhuanlan.zhihu.com/p/464874603" target="_blank" rel="noopener noreferrer">阿里云 Java 智能编码插件 Cosy 诞生！<ExternalLinkIcon/></a>这篇文章。</p>
<h2 id="alibaba-java-code-guidelines-阿里巴巴-java-代码规范" tabindex="-1"><a class="header-anchor" href="#alibaba-java-code-guidelines-阿里巴巴-java-代码规范" aria-hidden="true">#</a> Alibaba Java Code Guidelines：阿里巴巴 Java 代码规范</h2>
<p>阿里巴巴 Java 代码规范，对应的 Github 地址为：<a href="https://github.com/alibaba/p3c" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/p3c<ExternalLinkIcon/></a> 。非常推荐安装！</p>
<p>安装完成之后建议将与语言替换成中文，提示更加友好一点。</p>
<p><img src="@source/idea-plugins/pictures/p3c/Alibaba-Java-Code-Guidelines2.png" alt="" loading="lazy"></p>
<p>根据官方描述：</p>
<blockquote>
<p>目前这个插件实现了开发手册中的的 53 条规则，大部分基于 PMD 实现，其中有 4 条规则基于 IDEA 实现，并且基于 IDEA <a href="https://www.jetbrains.com/help/idea/code-inspection.html" target="_blank" rel="noopener noreferrer">Inspection<ExternalLinkIcon/></a>实现了实时检测功能。部分规则实现了 Quick Fix 功能，对于可以提供 Quick Fix 但没有提供的，我们会尽快实现，也欢迎有兴趣的同学加入进来一起努力。 目前插件检测有两种模式：实时检测、手动触发。</p>
</blockquote>
<p>上述提到的开发手册也就是在 Java 开发领域赫赫有名的《阿里巴巴 Java 开发手册》。</p>
<h3 id="手动配置检测规则" tabindex="-1"><a class="header-anchor" href="#手动配置检测规则" aria-hidden="true">#</a> 手动配置检测规则</h3>
<p>你还可以手动配置相关 inspection 规则：</p>
<p><img src="@source/idea-plugins/pictures/p3c/Alibaba-Java-Code-Guidelines3.png" alt="" loading="lazy"></p>
<h3 id="使用效果" tabindex="-1"><a class="header-anchor" href="#使用效果" aria-hidden="true">#</a> 使用效果</h3>
<p>这个插件会实时检测出我们的代码不匹配它的规则的地方，并且会给出修改建议。比如我们按照下面的方式去创建线程池的话，这个插件就会帮我们检测出来,如下图所示。</p>
<p><img src="@source/idea-plugins/pictures/p3c/Alibaba-Java-Code-Guidelines1.png" alt="" loading="lazy"></p>
<p>这个可以对应上 《阿里巴巴 Java 开发手册》 这本书关于创建线程池的方式说明。</p>
<p><img src="@source/idea-plugins/pictures/p3c/阿里巴巴开发手册-线程池创建.png" alt="" loading="lazy"></p>
<h2 id="checkstyle-java-代码格式规范" tabindex="-1"><a class="header-anchor" href="#checkstyle-java-代码格式规范" aria-hidden="true">#</a> CheckStyle: Java 代码格式规范</h2>
<h3 id="为何需要-checkstyle-插件" tabindex="-1"><a class="header-anchor" href="#为何需要-checkstyle-插件" aria-hidden="true">#</a> 为何需要 CheckStyle 插件？</h3>
<p><strong>CheckStyle 几乎是 Java 项目开发必备的一个插件了，它会帮助我们检查 Java 代码的格式是否有问题比如变量命名格式是否有问题、某一行代码的长度是否过长等等。</strong></p>
<p>在项目上，<strong>通过项目开发人员自我约束来规范代码格式必然是不靠谱的！</strong> 因此，我们非常需要这样一款工具来帮助我们规范代码格式。</p>
<p>如果你看过我写的轮子的话，可以发现我为每一个项目都集成了 CheckStyle，并且设置了 <strong>Git Commit 钩子</strong>，保证在提交代码之前代码格式没有问题。</p>
<blockquote>
<p><strong>Guide 哥造的轮子</strong>（<em>代码简洁，结构清晰，欢迎学习，欢迎一起完善</em>）：</p>
<ol>
<li><a href="https://github.com/Snailclimb/guide-rpc-framework" target="_blank" rel="noopener noreferrer">guide-rpc-framework<ExternalLinkIcon/></a> ：A custom RPC framework implemented by Netty+Kyro+Zookeeper.（一款基于 Netty+Kyro+Zookeeper 实现的自定义 RPC 框架-附详细实现过程和相关教程）</li>
<li><a href="https://github.com/Snailclimb/jsoncat" target="_blank" rel="noopener noreferrer">jsoncat<ExternalLinkIcon/></a> ：仿 Spring Boot 但不同于 Spring Boot 的一个轻量级的 HTTP 框架</li>
</ol>
<p><strong>Git 钩子</strong>： Git 能在特定的重要动作比如 commit、push 发生时触发自定义脚本。 钩子都被存储在 Git 目录下的 <code>hooks</code> 子目录中。 也即绝大部分项目中的 <code>.git/hooks</code> 。</p>
</blockquote>
<h3 id="如何在-maven-gradle-项目中集成-checksytle" tabindex="-1"><a class="header-anchor" href="#如何在-maven-gradle-项目中集成-checksytle" aria-hidden="true">#</a> 如何在 Maven/Gradle 项目中集成 Checksytle?</h3>
<p>一般情况下，我们都是将其集成在项目中，并设置相应的 Git 钩子。网上有相应的介绍文章，这里就不多提了。</p>
<p>如果你觉得网上的文章不直观的话，可以参考我上面提到了两个轮子：</p>
<ol>
<li><a href="https://github.com/Snailclimb/guide-rpc-framework" target="_blank" rel="noopener noreferrer">guide-rpc-framework<ExternalLinkIcon/></a> ：Maven 项目集成 Checksytle。</li>
<li><a href="https://github.com/Snailclimb/jsoncat" target="_blank" rel="noopener noreferrer">jsoncat<ExternalLinkIcon/></a> ：Gradle 项目集成 Checksytle。</li>
</ol>
<p>如果你在项目中集成了 Checksytle 的话，每次检测会生成一个 HTML 格式的文件告诉你哪里的代码格式不对，这样看着非常不直观。通过 Checksytle 插件的话可以非常直观的将项目中存在格式问题的地方显示出来。</p>
<p><img src="https://cdn.jsdelivr.net/gh/javaguide-tech/blog-images/IDEA插件/image-20201013135044410.png" alt="" loading="lazy"></p>
<p>如果你只是自己在本地使用，并不想在项目中集成 Checksytle 的话也可以，只需要下载一个 Checksytle 插件就足够了。</p>
<h3 id="如何安装" tabindex="-1"><a class="header-anchor" href="#如何安装" aria-hidden="true">#</a> 如何安装？</h3>
<p>我们直接在 IDEA 的插件市场即可找到这个插件。我这里已经安装好了。</p>
<p><img src="https://cdn.jsdelivr.net/gh/javaguide-tech/blog-images/IDEA插件/image-20201013103610557.png" alt="" loading="lazy"></p>
<p>安装插件之后重启 IDEA，你会发现就可以在底部菜单栏找到 CheckStyle 了。</p>
<p><img src="https://cdn.jsdelivr.net/gh/javaguide-tech/blog-images/IDEA插件/image-20201013134644991.png" alt="" loading="lazy"></p>
<h3 id="如何自定义检测规则" tabindex="-1"><a class="header-anchor" href="#如何自定义检测规则" aria-hidden="true">#</a> 如何自定义检测规则？</h3>
<p>如果你需要自定义代码格式检测规则的话，可以按照如下方式进行配置（你可以导入用于自定义检测规则的<code>CheckStyle.xml</code>文件）。</p>
<p><img src="https://cdn.jsdelivr.net/gh/javaguide-tech/blog-images/IDEA插件/setting-check-style.png" alt="" loading="lazy"></p>
<h3 id="使用效果-1" tabindex="-1"><a class="header-anchor" href="#使用效果-1" aria-hidden="true">#</a> 使用效果</h3>
<p>配置完成之后，按照如下方式使用这个插件！</p>
<p><img src="https://cdn.jsdelivr.net/gh/javaguide-tech/blog-images/IDEA插件/run-check-style.png" alt="run-check-style" loading="lazy"></p>
<p>可以非常清晰的看到：CheckStyle 插件已经根据我们自定义的规则将项目中的代码存在格式问题的地方都检测了出来。</p>
<h2 id="sonarlint-帮你优化代码" tabindex="-1"><a class="header-anchor" href="#sonarlint-帮你优化代码" aria-hidden="true">#</a> SonarLint:帮你优化代码</h2>
<p>SonarLint 帮助你发现代码的错误和漏洞，就像是代码拼写检查器一样，SonarLint 可以实时显示出代码的问题，并提供清晰的修复指导，以便你提交代码之前就可以解决它们。</p>
<p><img src="https://cdn.jsdelivr.net/gh/javaguide-tech/blog-images-2@main/系统设计/image-20201019222817359.png" alt="" loading="lazy"></p>
<p>并且，很多项目都集成了 SonarQube,SonarLint 可以很方便地与 SonarQube 集成。</p>
</template>
