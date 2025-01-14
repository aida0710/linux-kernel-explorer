---
sidebar_position: 1
---
# basic.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/typedef/declaration/basic.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

bool xdrgen_decode_{{ name }}(struct xdr_stream *xdr, {{ name }} *ptr);
{% if name in pass_by_reference %}
bool xdrgen_encode_{{ name }}(struct xdr_stream *xdr, const {{ name }} *value);
{%- else -%}
bool xdrgen_encode_{{ name }}(struct xdr_stream *xdr, const {{ name }} value);
{% endif %}

```
