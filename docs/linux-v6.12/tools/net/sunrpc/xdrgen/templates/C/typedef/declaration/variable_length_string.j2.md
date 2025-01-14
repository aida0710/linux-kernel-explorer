---
sidebar_position: 6
---
# variable_length_string.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/typedef/declaration/variable_length_string.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

bool xdrgen_decode_{{ name }}(struct xdr_stream *xdr, {{ classifier }}{{ name }} *ptr);
bool xdrgen_encode_{{ name }}(struct xdr_stream *xdr, const {{ classifier }}{{ name }} value);

```
