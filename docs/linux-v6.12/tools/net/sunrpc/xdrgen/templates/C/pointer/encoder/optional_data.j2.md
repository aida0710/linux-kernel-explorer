---
sidebar_position: 6
---
# optional_data.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/pointer/encoder/optional_data.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* member {{ name }} (optional data) */
{% endif %}
	if (!xdrgen_encode_{{ type }}(xdr, value->{{ name }}))
		return false;

```
