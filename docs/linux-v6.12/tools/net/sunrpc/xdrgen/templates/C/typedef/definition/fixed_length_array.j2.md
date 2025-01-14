---
sidebar_position: 2
---
# fixed_length_array.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/typedef/definition/fixed_length_array.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

{% if annotate %}
/* typedef {{ name }} (fixed-length array) */
{% endif %}
typedef {{ type }}{{ name }}[{{ size }}];

```
