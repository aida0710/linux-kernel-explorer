---
sidebar_position: 12
---
# brcm,ns2.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/bcm/brcm,ns2.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/bcm/brcm,ns2.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Broadcom North Star 2 (NS2)

maintainers:
  - Ray Jui <rjui@broadcom.com>
  - Scott Branden <sbranden@broadcom.com>

properties:
  $nodename:
    const: '/'
  compatible:
    items:
      - enum:
          - brcm,ns2-svk
          - brcm,ns2-xmc
      - const: brcm,ns2

additionalProperties: true

...

```
