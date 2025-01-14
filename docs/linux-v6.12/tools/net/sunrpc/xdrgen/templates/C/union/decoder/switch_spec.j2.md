---
sidebar_position: 8
---
# switch_spec.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/union/decoder/switch_spec.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}
{% if annotate %}
	/* discriminant {{ name }} */
{% endif %}
	if (!xdrgen_decode_{{ type }}(xdr, &ptr->{{ name }}))
		return false;
	switch (ptr->{{ name }}) {

```
