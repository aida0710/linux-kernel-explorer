---
sidebar_position: 1
---
# close.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/enum/declaration/close.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

bool xdrgen_decode_{{ name }}(struct xdr_stream *xdr, enum {{ name }} *ptr);
bool xdrgen_encode_{{ name }}(struct xdr_stream *xdr, enum {{ name }} value);

```
