---
sidebar_position: 5
---
# brcm,bcm23550.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/bcm/brcm,bcm23550.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/bcm/brcm,bcm23550.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Broadcom BCM23550

maintainers:
  - Florian Fainelli <f.fainelli@gmail.com>

properties:
  $nodename:
    const: '/'
  compatible:
    items:
      - enum:
          - brcm,bcm23550-sparrow
      - const: brcm,bcm23550

additionalProperties: true

...

```
