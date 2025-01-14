---
sidebar_position: 9
---
# variable_length_string.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/struct/definition/variable_length_string.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* (variable-length string) */
{% endif %}
	string {{ name }};

```
