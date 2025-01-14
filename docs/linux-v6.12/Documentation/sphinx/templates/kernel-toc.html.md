---
sidebar_position: 1
---
# kernel-toc.html

### ファイル情報

- パス: `linux-v6.12/Documentation/sphinx/templates/kernel-toc.html`

### コンテンツ

```html
<!-- SPDX-License-Identifier: GPL-2.0 -->
{# Create a local TOC the kernel way #}
<p>
<h3 class="kernel-toc-contents">Contents</h3>
<input type="checkbox" class="kernel-toc-toggle" id = "kernel-toc-toggle" checked>
<label class="kernel-toc-title" for="kernel-toc-toggle"></label>

<div class="kerneltoc" id="kerneltoc">
{{ toctree(maxdepth=3) }}
</div>
{# hacky script to try to position the left column #}
<script type="text/javascript"> <!--
  var sbar = document.getElementsByClassName("sphinxsidebar")[0];
  let currents = document.getElementsByClassName("current")
  if (currents.length) {
    sbar.scrollTop = currents[currents.length - 1].offsetTop;
  }
  --> </script>

```
