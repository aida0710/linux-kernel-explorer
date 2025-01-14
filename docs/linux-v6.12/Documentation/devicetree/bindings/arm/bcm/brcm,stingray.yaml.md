---
sidebar_position: 14
---
# brcm,stingray.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/bcm/brcm,stingray.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/bcm/brcm,stingray.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Broadcom Stingray

maintainers:
  - Ray Jui <rjui@broadcom.com>
  - Scott Branden <sbranden@broadcom.com>

properties:
  $nodename:
    const: '/'
  compatible:
    items:
      - enum:
          - brcm,bcm958742k
          - brcm,bcm958742t
          - brcm,bcm958802a802x
      - const: brcm,stingray

additionalProperties: true

...

```
