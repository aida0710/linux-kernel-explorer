---
sidebar_position: 4
---
# fixed_length_opaque.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/pointer/definition/fixed_length_opaque.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* (fixed-length opaque) */
{% endif %}
	u8 {{ name }}[{{ size }}];

```
