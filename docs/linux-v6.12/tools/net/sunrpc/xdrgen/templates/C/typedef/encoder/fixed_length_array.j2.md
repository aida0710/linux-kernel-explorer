---
sidebar_position: 2
---
# fixed_length_array.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/typedef/encoder/fixed_length_array.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

{% if annotate %}
/* typedef {{ name }} */
{% endif %}
{% if name in public_apis %}
bool
{% else %}
static bool __maybe_unused
{% endif %}
xdrgen_encode_{{ name }}(struct xdr_stream *xdr, const {{ classifier }}{{ name }} value)
{
{% if annotate %}
	/* (fixed-length array) */
{% endif %}
	for (u32 i = 0; i < {{ size }}; i++) {
{% if type in pass_by_reference %}
		if (xdrgen_encode_{{ type }}(xdr, &value->items[i]) < 0)
{% else %}
		if (xdrgen_encode_{{ type }}(xdr, value->items[i]) < 0)
{% endif %}
			return false;
	}
	return true;
};

```
