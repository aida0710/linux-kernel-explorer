---
sidebar_position: 8
---
# variable_length_opaque.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/struct/decoder/variable_length_opaque.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* member {{ name }} (variable-length opaque) */
{% endif %}
	if (!xdrgen_decode_opaque(xdr, (opaque *)ptr, {{ maxsize }}))
		return false;

```
