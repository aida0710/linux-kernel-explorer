---
sidebar_position: 7
---
# variable_length_array.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/pointer/encoder/variable_length_array.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* member {{ name }} (variable-length array) */
{% endif %}
	if (value->{{ name }}.count > {{ maxsize }})
		return false;
	if (xdr_stream_encode_u32(xdr, value->{{ name }}.count) != XDR_UNIT)
		return false;
	for (u32 i = 0; i < value->{{ name }}.count; i++)
{% if type in pass_by_reference %}
		if (!xdrgen_encode_{{ type }}(xdr, &value->{{ name }}.element[i]))
{% else %}
		if (!xdrgen_encode_{{ type }}(xdr, value->{{ name }}.element[i]))
{% endif %}
			return false;

```
