---
sidebar_position: 2
---
# fixed_length_array.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/typedef/decoder/fixed_length_array.j2`

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
xdrgen_decode_{{ name }}(struct xdr_stream *xdr, {{ classifier }}{{ name }} *ptr)
{
{% if annotate %}
	/* (fixed-length array) */
{% endif %}
	for (u32 i = 0; i < {{ size }}; i++) {
{%- if classifier == '' %}
		if (xdrgen_decode_{{ type }}(xdr, ptr->items[i]) < 0)
{% else %}
		if (xdrgen_decode_{{ type }}(xdr, &ptr->items[i]) < 0)
{% endif %}
			return false;
	}
	return true;
};

```
