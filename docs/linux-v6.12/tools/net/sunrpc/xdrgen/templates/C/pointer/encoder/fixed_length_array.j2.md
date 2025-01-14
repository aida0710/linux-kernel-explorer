---
sidebar_position: 3
---
# fixed_length_array.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/pointer/encoder/fixed_length_array.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* member {{ name }} (fixed-length array) */
{% endif %}
	for (u32 i = 0; i < {{ size }}; i++) {
{% if type in pass_by_reference %}
		if (xdrgen_encode_{{ type }}(xdr, &value->items[i]) < 0)
{% else %}
		if (xdrgen_encode_{{ type }}(xdr, value->items[i]) < 0)
{% endif %}
			return false;
	}

```
