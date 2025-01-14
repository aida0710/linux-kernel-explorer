---
sidebar_position: 2
---
# close.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/union/definition/close.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
	} u;
};
{%- if name in public_apis %}

bool xdrgen_decode_{{ name }}(struct xdr_stream *xdr, struct {{ name }} *ptr);
bool xdrgen_encode_{{ name }}(struct xdr_stream *xdr, const struct {{ name }} *ptr);
{%- endif -%}

```
