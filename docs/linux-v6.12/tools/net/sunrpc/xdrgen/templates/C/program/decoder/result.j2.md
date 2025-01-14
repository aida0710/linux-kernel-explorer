---
sidebar_position: 2
---
# result.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/program/decoder/result.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

{% if annotate %}
/* Decode {{ result }} results */
{% endif %}
static int {{ program }}_xdr_dec_{{ result }}(struct rpc_rqst *req,
		struct xdr_stream *xdr, void *data)
{
{% if result == 'void' %}
	xdrgen_decode_void(xdr);
{% else %}
	struct {{ result }} *result = data;

	if (!xdrgen_decode_{{ result }}(xdr, result))
		return -EIO;
	if (result->stat != nfs_ok) {
		trace_nfs_xdr_status(xdr, (int)result->stat);
		return {{ program }}_stat_to_errno(result->stat);
	}
{% endif %}
	return 0;
}

```
