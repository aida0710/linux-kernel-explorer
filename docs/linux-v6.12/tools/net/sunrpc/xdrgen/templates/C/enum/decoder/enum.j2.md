---
sidebar_position: 1
---
# enum.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/enum/decoder/enum.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

{% if annotate %}
/* enum {{ name }} */
{% endif %}
{% if name in public_apis %}
bool
{% else %}
static bool __maybe_unused
{% endif %}
xdrgen_decode_{{ name }}(struct xdr_stream *xdr, enum {{ name }} *ptr)
{
	u32 val;

	if (xdr_stream_decode_u32(xdr, &val) < 0)
		return false;
	*ptr = val;
	return true;
}

```
