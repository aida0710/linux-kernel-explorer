---
sidebar_position: 7
---
# variable_length_array.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/pointer/definition/variable_length_array.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* (variable-length array) */
{% endif %}
	struct {
		u32 count;
		{{ classifier }}{{ type }} *element;
	} {{ name }};

```
