---
sidebar_position: 69
---
# spear.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/spear.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/spear.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: ST SPEAr Platforms

maintainers:
  - Viresh Kumar <vireshk@kernel.org>
  - Stefan Roese <sr@denx.de>

properties:
  $nodename:
    const: '/'
  compatible:
    items:
      - enum:
          - st,spear600
          - st,spear300
          - st,spear310
          - st,spear320
          - st,spear1310
          - st,spear1340

additionalProperties: true

...

```
