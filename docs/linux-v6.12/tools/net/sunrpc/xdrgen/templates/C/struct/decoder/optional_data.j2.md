---
sidebar_position: 6
---
# optional_data.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/struct/decoder/optional_data.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* member {{ name }} (optional data) */
{% endif %}
	if (!xdrgen_decode_{{ type }}(xdr, ptr->{{ name }}))
		return false;

```
