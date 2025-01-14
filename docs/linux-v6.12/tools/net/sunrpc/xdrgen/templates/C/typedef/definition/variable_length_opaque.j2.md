---
sidebar_position: 5
---
# variable_length_opaque.j2

### ファイル情報

- パス: `linux-v6.12/tools/net/sunrpc/xdrgen/templates/C/typedef/definition/variable_length_opaque.j2`

### コンテンツ

```j2
{# SPDX-License-Identifier: GPL-2.0 #}

{% if annotate %}
/* typedef {{ name }} (variable-length opaque) */
{% endif %}
typedef opaque {{ name }};

```
