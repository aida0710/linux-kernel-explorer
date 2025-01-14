---
sidebar_position: 1
---
# argument.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/program/decoder/argument.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

/**
 * {{ program }}_svc_decode_{{ argument }} - Decode a {{ argument }} argument
 * @rqstp: RPC transaction context
 * @xdr: source XDR data stream
 *
 * Return values:
 *   %true: procedure arguments decoded successfully
 *   %false: decode failed
 */
bool {{ program }}_svc_decode_{{ argument }}(struct svc_rqst *rqstp, struct xdr_stream *xdr)
{
{% if argument == 'void' %}
	return xdrgen_decode_void(xdr);
{% else %}
	struct {{ argument }} *argp = rqstp->rq_argp;

	return xdrgen_decode_{{ argument }}(xdr, argp);
{% endif %}
}

```
