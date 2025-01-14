---
sidebar_position: 10
---
# variable_length_opaque.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/union/decoder/variable_length_opaque.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
		/* member {{ name }} (variable-length opaque) */
{% endif %}
		if (!xdrgen_decode_opaque(xdr, (struct opaque *)ptr->u.{{ name }}, {{ maxsize }}))
			return false;

```
