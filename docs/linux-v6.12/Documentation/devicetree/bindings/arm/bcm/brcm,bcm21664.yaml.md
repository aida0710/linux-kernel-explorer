---
sidebar_position: 4
---
# brcm,bcm21664.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/bcm/brcm,bcm21664.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/bcm/brcm,bcm21664.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Broadcom BCM21664

maintainers:
  - Florian Fainelli <f.fainelli@gmail.com>

properties:
  $nodename:
    const: '/'
  compatible:
    items:
      - enum:
          - brcm,bcm21664-garnet
      - const: brcm,bcm21664

additionalProperties: true

...

```
