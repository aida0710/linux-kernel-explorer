---
sidebar_position: 1
---
# lpc32xx.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/nxp/lpc32xx.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/nxp/lpc32xx.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: NXP LPC32xx Platforms

maintainers:
  - Roland Stigge <stigge@antcom.de>

properties:
  compatible:
    oneOf:
      - enum:
          - nxp,lpc3220
          - nxp,lpc3230
          - nxp,lpc3240
      - items:
          - enum:
              - ea,ea3250
              - phytec,phy3250
          - const: nxp,lpc3250

additionalProperties: true
...

```
