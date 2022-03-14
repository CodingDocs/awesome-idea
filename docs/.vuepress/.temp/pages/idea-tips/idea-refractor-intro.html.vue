<template><h1 id="idea-重构入门" tabindex="-1"><a class="header-anchor" href="#idea-重构入门" aria-hidden="true">#</a> IDEA 重构入门</h1>
<p>我们在使用 IDEA 进行重构之前，先介绍一个方便我们进行重构的快捷键：<code>ctrl+t(mac)/ctrl+shift+alt+t</code>（如果忘记快捷键的话，鼠标右键也能找到重构选项），使用这个快捷键可以快速调出常用重构的选项，如下图所示：</p>
<p><img src="@source/idea-tips/pictures/refractor-help.png" alt="" loading="lazy"></p>
<h3 id="重命名-rename" tabindex="-1"><a class="header-anchor" href="#重命名-rename" aria-hidden="true">#</a> 重命名(rename)</h3>
<p>快捷键：<strong>Shift + F6(mac) / Shift + F6(windows/Linux)：</strong> 对类、变量或者方法名重命名。</p>
<p><img src="@source/idea-tips/pictures/rename.gif" alt="重命名" loading="lazy"></p>
<h3 id="提取相关重构手段" tabindex="-1"><a class="header-anchor" href="#提取相关重构手段" aria-hidden="true">#</a> 提取相关重构手段</h3>
<p>这部分的快捷键实际很好记忆，我是这样记忆的:</p>
<p>前面两个键位是  <code>command + option(mac) / ctrl + alt (Windows/Linux)</code> 是固定的，只有后面一个键位会变比如Extract constant (提取变量)就是 c（constant）、Extract variable (提取变量)就是 v(variable)。</p>
<h4 id="提取常量-extract-constant" tabindex="-1"><a class="header-anchor" href="#提取常量-extract-constant" aria-hidden="true">#</a> 提取常量(extract constant)</h4>
<ol>
<li><strong>使用场景</strong> ：提取未经过定义就直接出现的常量。提取常量使得你的编码更易读，避免硬编码。</li>
<li><strong>快捷键：</strong>  <code>command + option+ c(mac)/ ctrl + alt + c(Windows/Linux)</code></li>
</ol>
<p><strong>示例：</strong></p>
<p><img src="@source/idea-tips/pictures/exact/extract-constant.gif" alt="" loading="lazy"></p>
<h4 id="提取参数-exact-parameter" tabindex="-1"><a class="header-anchor" href="#提取参数-exact-parameter" aria-hidden="true">#</a> 提取参数(exact parameter﻿)</h4>
<ol>
<li><strong>使用场景</strong> ：提取参数到方法中。</li>
<li><strong>快捷键：</strong>  <code>command + option+ p(mac)/ ctrl + alt + p(Windows/Linux)</code></li>
</ol>
<p><img src="@source/idea-tips/pictures/exact/exact-parameter.gif" alt="" loading="lazy"></p>
<h4 id="提取变量-exact-variable" tabindex="-1"><a class="header-anchor" href="#提取变量-exact-variable" aria-hidden="true">#</a> 提取变量(exact variable)</h4>
<ol>
<li><strong>使用场景</strong> ：提取多次出现的表达式。</li>
<li><strong>快捷键：</strong> <code>command + option+ v(mac) / ctrl + alt + v(Windows/Linux) </code></li>
</ol>
<p><strong>示例：</strong></p>
<p><img src="@source/idea-tips/pictures/exact/exact-variable.gif" alt="" loading="lazy"></p>
<h4 id="提取属性-exact-field" tabindex="-1"><a class="header-anchor" href="#提取属性-exact-field" aria-hidden="true">#</a> 提取属性(exact field)</h4>
<ol>
<li><strong>使用场景</strong> ：把当前表达式提取成为类的一个属性。</li>
<li><strong>快捷键：</strong> <code>command + option+ f(mac) / ctrl + alt + f(Windows/Linux) </code></li>
</ol>
<p><strong>示例：</strong></p>
<p><img src="@source/idea-tips/pictures/exact/exact-field.gif" alt="" loading="lazy"></p>
<p><strong>示例：</strong></p>
<p><img src="@source/idea-tips/pictures/exact/exact-variable.gif" alt="" loading="lazy"></p>
<h4 id="提取方法-exact-method" tabindex="-1"><a class="header-anchor" href="#提取方法-exact-method" aria-hidden="true">#</a> 提取方法(exact method)</h4>
<ol>
<li><strong>使用场景</strong> ：1个或者多个表达式可以提取为一个方法。 提取方法也能使得你的编码更易读，更加语义化。</li>
<li><strong>快捷键：</strong>  <code>command + option+ m(mac)/ ctrl + alt + m(Windows/Linux)</code></li>
</ol>
<p><strong>示例：</strong></p>
<p><img src="@source/idea-tips/pictures/exact/exact-method.gif" alt="" loading="lazy"></p>
<h4 id="提取接口-exact-interface" tabindex="-1"><a class="header-anchor" href="#提取接口-exact-interface" aria-hidden="true">#</a> 提取接口(exact interface)</h4>
<ol>
<li><strong>使用场景</strong> ：想要把一个类中的1个或多个方法提取到一个接口中的时候。</li>
<li><strong>快捷键：</strong>  <code>command + option+ m(mac)/ ctrl + alt + m(Windows/Linux)</code></li>
</ol>
<p><strong>示例：</strong></p>
<p><img src="@source/idea-tips/pictures/exact/exact-interface.gif" alt="" loading="lazy"></p>
</template>
