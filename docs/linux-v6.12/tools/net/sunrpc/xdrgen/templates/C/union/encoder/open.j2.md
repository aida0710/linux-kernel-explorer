---
sidebar_position: 6
---
# open.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/union/encoder/open.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

{% if annotate %}
/* union {{ name }} */
{% endif %}
{% if name in public_apis %}
bool
{% else %}
static bool __maybe_unused
{% endif %}
xdrgen_encode_{{ name }}(struct xdr_stream *xdr, const struct {{ name }} *ptr)
{

```
