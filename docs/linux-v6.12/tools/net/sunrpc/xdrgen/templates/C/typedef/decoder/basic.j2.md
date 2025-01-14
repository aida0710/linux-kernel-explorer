---
sidebar_position: 1
---
# basic.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/typedef/decoder/basic.j2`

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
xdrgen_decode_{{ name }}(struct xdr_stream *xdr, {{ name }} *ptr)
{
{% if annotate %}
	/* (basic) */
{% endif %}
	return xdrgen_decode_{{ type }}(xdr, ptr);
};

```
