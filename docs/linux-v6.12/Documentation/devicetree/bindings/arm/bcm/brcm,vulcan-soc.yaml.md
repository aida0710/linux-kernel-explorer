---
sidebar_position: 15
---
# brcm,vulcan-soc.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/bcm/brcm,vulcan-soc.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/bcm/brcm,vulcan-soc.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Broadcom Vulcan

maintainers:
  - Robert Richter <rrichter@marvell.com>

properties:
  $nodename:
    const: '/'
  compatible:
    items:
      - enum:
          - brcm,vulcan-eval
          - cavium,thunderx2-cn9900
      - const: brcm,vulcan-soc

additionalProperties: true

...

```
