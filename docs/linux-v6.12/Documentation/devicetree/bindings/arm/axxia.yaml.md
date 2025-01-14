---
sidebar_position: 36
---
# axxia.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/axxia.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/axxia.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Axxia AXM55xx

maintainers:
  - Anders Berg <anders.berg@lsi.com>

properties:
  $nodename:
    const: "/"
  compatible:
    description: LSI AXM5516 Validation board (Amarillo)
    items:
      - const: lsi,axm5516-amarillo
      - const: lsi,axm5516

additionalProperties: true

...

```
