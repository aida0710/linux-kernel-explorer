---
sidebar_position: 7
---
# armadeus,st0700-adapt.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/display/panel/armadeus,st0700-adapt.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/display/panel/armadeus,st0700-adapt.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Armadeus ST0700 Adapter

description:
  A Santek ST0700I5Y-RBSLW 7.0" WVGA (800x480) TFT with an adapter board.

maintainers:
  - '"Sébastien Szymanski" <sebastien.szymanski@armadeus.com>'
  - Thierry Reding <thierry.reding@gmail.com>

allOf:
  - $ref: panel-common.yaml#

properties:
  compatible:
    const: armadeus,st0700-adapt

  power-supply: true
  backlight: true
  port: true

additionalProperties: false

required:
  - compatible
  - power-supply

...

```
