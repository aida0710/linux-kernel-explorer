---
sidebar_position: 6
---
# variable_length_string.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/typedef/decoder/variable_length_string.j2`

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
	/* (variable-length string) */
{% endif %}
	return xdrgen_decode_string(xdr, ptr, {{ maxsize }});
};

```
