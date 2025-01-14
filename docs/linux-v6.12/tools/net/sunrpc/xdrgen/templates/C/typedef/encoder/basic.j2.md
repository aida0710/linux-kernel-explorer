---
sidebar_position: 1
---
# basic.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/typedef/encoder/basic.j2`

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
{% if name in pass_by_reference %}
xdrgen_encode_{{ name }}(struct xdr_stream *xdr, const {{ classifier }}{{ name }} *value)
{% else %}
xdrgen_encode_{{ name }}(struct xdr_stream *xdr, const {{ classifier }}{{ name }} value)
{% endif %}
{
{% if annotate %}
	/* (basic) */
{% endif %}
	return xdrgen_encode_{{ type }}(xdr, value);
};

```
