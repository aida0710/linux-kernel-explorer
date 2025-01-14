---
sidebar_position: 1
---
# argument.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/program/declaration/argument.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
bool {{ program }}_svc_decode_{{ argument }}(struct svc_rqst *rqstp, struct xdr_stream *xdr);

```
