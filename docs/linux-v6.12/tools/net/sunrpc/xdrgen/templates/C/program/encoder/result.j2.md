---
sidebar_position: 2
---
# result.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/program/encoder/result.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

/**
 * {{ program }}_svc_encode_{{ result }} - Encode a {{ result }} result
 * @rqstp: RPC transaction context
 * @xdr: target XDR data stream
 *
 * Return values:
 *   %true: procedure results encoded successfully
 *   %false: encode failed
 */
bool {{ program }}_svc_encode_{{ result }}(struct svc_rqst *rqstp, struct xdr_stream *xdr)
{
{% if result == 'void' %}
	return xdrgen_encode_void(xdr);
{% else %}
	struct {{ result }} *resp = rqstp->rq_resp;

	return xdrgen_encode_{{ result }}(xdr, resp);
{% endif %}
}

```
