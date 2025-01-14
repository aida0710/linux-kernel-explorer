---
sidebar_position: 4
---
# fixed_length_opaque.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/pointer/encoder/fixed_length_opaque.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* member {{ name }} (fixed-length opaque) */
{% endif %}
	if (xdr_stream_encode_opaque_fixed(xdr, value->{{ name }}, {{ size }}) < 0)
		return false;

```
