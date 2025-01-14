---
sidebar_position: 3
---
# fixed_length_array.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/struct/decoder/fixed_length_array.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* member {{ name }} (fixed-length array) */
{% endif %}
	for (u32 i = 0; i < {{ size }}; i++) {
		if (xdrgen_decode_{{ type }}(xdr, &ptr->{{ name }}.items[i]) < 0)
			return false;
	}

```
