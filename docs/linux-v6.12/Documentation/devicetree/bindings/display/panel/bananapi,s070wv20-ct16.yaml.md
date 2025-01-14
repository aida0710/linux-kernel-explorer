---
sidebar_position: 10
---
# bananapi,s070wv20-ct16.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/display/panel/bananapi,s070wv20-ct16.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/display/panel/bananapi,s070wv20-ct16.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Banana Pi 7" (S070WV20-CT16) TFT LCD Panel

maintainers:
  - Chen-Yu Tsai <wens@csie.org>
  - Thierry Reding <thierry.reding@gmail.com>

allOf:
  - $ref: panel-common.yaml#

properties:
  compatible:
    const: bananapi,s070wv20-ct16

  power-supply: true
  backlight: true
  enable-gpios: true
  port: true

additionalProperties: false

required:
  - compatible
  - power-supply

...

```
