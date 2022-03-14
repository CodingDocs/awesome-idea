<template><p>由于后面要分享的一篇文章中用到了这篇文章要推荐的一个插件，所以这里分享一下。非常实用！你会爱上它的！</p>
<p><img src="@source/idea-plugins/pictures/jclasslib/image-20201013084919965.png" alt="" loading="lazy"></p>
<p><strong>开始推荐 IDEA 字节码查看神器之前，先来回顾一下 Java 字节码是啥。</strong></p>
<h2 id="何为-java-字节码" tabindex="-1"><a class="header-anchor" href="#何为-java-字节码" aria-hidden="true">#</a> 何为 Java 字节码?</h2>
<p>Java 虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM 有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。</p>
<p><strong>什么是字节码?采用字节码的好处是什么?</strong></p>
<blockquote>
<p>在 Java 中，JVM 可以理解的代码就叫做<code>字节码</code>（即扩展名为 <code>.class</code> 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。</p>
</blockquote>
<p><strong>Java 程序从源代码到运行一般有下面 3 步：</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/Java 程序运行过程.png" alt="Java程序运行过程" loading="lazy"></p>
<h2 id="为什么要查看-java-字节码" tabindex="-1"><a class="header-anchor" href="#为什么要查看-java-字节码" aria-hidden="true">#</a> 为什么要查看 Java 字节码？</h2>
<p>我们在平时学习的时候，经常需要查看某个 java 类的字节码文件。查看字节码文件更容易让我们搞懂 java 代码背后的原理比如搞懂 java 中的各种语法糖的本质。</p>
<h2 id="如何查看-java-字节码" tabindex="-1"><a class="header-anchor" href="#如何查看-java-字节码" aria-hidden="true">#</a> 如何查看 Java 字节码?</h2>
<p>如果我们通过命令行来查看某个 class 的字节码文件的话，可以直接通过 <code>javap</code> 命令，不过这种方式太原始了，效率十分低，并且看起来不直观。</p>
<p>下面介绍两种使用 IDEA 查看类对应字节码文件的方式（<em><code>javap</code>这种方式就不提了</em>）。</p>
<p>我们以这段代码作为案例:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>flag <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面这段代码由于使用三目运算符不当导致诡异了 NPE 异常。为了搞清楚事情的原因，我们来看其对应的字节码。</p>
<h3 id="使用-idea-自带功能" tabindex="-1"><a class="header-anchor" href="#使用-idea-自带功能" aria-hidden="true">#</a> 使用 IDEA 自带功能</h3>
<p>我们点击 <code>View -&gt; Show Bytecode</code> 即可通过 IDEA 查看某个类对应的字节码文件。</p>
<blockquote>
<p>需要注意的是：<strong>查看某个类对应的字节码文件之前确保它已经被编译过。</strong></p>
</blockquote>
<p><img src="@source/idea-plugins/pictures/jclasslib/image-20201012143530226.png" alt="使用IDEA自带功能查看Java字节码" loading="lazy"></p>
<p>稍等几秒钟之后，你就可以直观到看到对应的类的字节码内容了。</p>
<p><img src="@source/idea-plugins/pictures/jclasslib/image-20201012145127465.png" alt="" loading="lazy"></p>
<p>从字节码中可以看出，我圈出来的位置发生了 <strong>拆箱操作</strong> 。</p>
<blockquote>
<ul>
<li><strong>装箱</strong>：将基本类型用它们对应的引用类型包装起来；</li>
<li><strong>拆箱</strong>：将包装类型转换为基本数据类型；</li>
</ul>
</blockquote>
<p>详细解释下就是：<code>flag ? 0 : i</code> 这行代码中，0 是基本数据类型 int，返回数据的时候 i 会被强制拆箱成 int 类型，由于 i 的值是 null，因此就抛出了 NPE 异常。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">Boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>flag <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果，我们把代码中 <code>flag</code> 变量的值修改为 true 的话，就不会存在 NPE 问题了，因为会直接返回 0，不会进行拆箱操作。</p>
<h3 id="使用-idea-插件-jclasslib-推荐" tabindex="-1"><a class="header-anchor" href="#使用-idea-插件-jclasslib-推荐" aria-hidden="true">#</a> 使用 IDEA 插件 jclasslib(推荐)</h3>
<p>相比于 IDEA 自带的查看类字节的功能，我更推荐 <code>jclasslib</code> 这个插件，非常棒！</p>
<p><strong>使用 <code>jclasslib</code> 不光可以直观地查看某个类对应的字节码文件，还可以查看类的基本信息、常量池、接口、属性、函数等信息。</strong></p>
<p><img src="@source/idea-plugins/pictures/jclasslib/image-20201012145646086.png" alt="" loading="lazy"></p>
<p>我们直接在 IDEA 的插件市场即可找到这个插件。我这里已经安装好了。</p>
<p><img src="@source/idea-plugins/pictures/jclasslib/image-20201012145900911.png" alt="" loading="lazy"></p>
<p>安装完成之后，重启 IDEA。点击<code>View -&gt; Show Bytecode With jclasslib</code> 即可通过<code>jclasslib</code> 查看某个类对应的字节码文件。</p>
<p><img src="@source/idea-plugins/pictures/jclasslib/image-20201012150252106.png" alt="使用IDEA插件jclasslib查看类的字节码" loading="lazy"></p>
</template>
