---
sidebar_position: 1
---
# basic.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/struct/definition/basic.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* (basic) */
{% endif %}
	{{ classifier }}{{ type }} {{ name }};

```
