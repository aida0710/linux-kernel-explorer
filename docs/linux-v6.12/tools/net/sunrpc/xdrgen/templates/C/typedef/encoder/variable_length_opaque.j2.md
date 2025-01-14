---
sidebar_position: 5
---
# variable_length_opaque.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/typedef/encoder/variable_length_opaque.j2`

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
	/* (variable-length opaque) */
{% endif %}
	return xdr_stream_encode_opaque(xdr, value.data, value.len) >= 0;
};

```
