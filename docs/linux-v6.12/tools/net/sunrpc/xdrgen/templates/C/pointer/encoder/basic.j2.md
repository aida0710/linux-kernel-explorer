---
sidebar_position: 1
---
# basic.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/pointer/encoder/basic.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* member {{ name }} (basic) */
{% endif %}
{% if type in pass_by_reference %}
	if (!xdrgen_encode_{{ type }}(xdr, &value->{{ name }}))
{% else %}
	if (!xdrgen_encode_{{ type }}(xdr, value->{{ name }}))
{% endif %}
		return false;

```
