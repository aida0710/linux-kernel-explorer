---
sidebar_position: 10
---
# brcm,cygnus.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/bcm/brcm,cygnus.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/bcm/brcm,cygnus.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Broadcom Cygnus

maintainers:
  - Ray Jui <rjui@broadcom.com>
  - Scott Branden <sbranden@broadcom.com>

properties:
  $nodename:
    const: '/'
  compatible:
    items:
      - enum:
          - brcm,bcm11300
          - brcm,bcm11320
          - brcm,bcm11350
          - brcm,bcm11360
          - brcm,bcm58300
          - brcm,bcm58302
          - brcm,bcm58303
          - brcm,bcm58305
      - const: brcm,cygnus

additionalProperties: true

...

```
