---
sidebar_position: 11
---
# variable_length_string.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/union/decoder/variable_length_string.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
		/* member {{ name }} (variable-length string) */
{% endif %}
		if (!xdrgen_decode_string(xdr, (struct string *)ptr->u.{{ name }}, {{ maxsize }}))
			return false;

```
