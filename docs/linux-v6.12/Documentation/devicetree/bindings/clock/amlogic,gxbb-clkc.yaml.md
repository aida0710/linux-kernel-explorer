---
sidebar_position: 48
---
# amlogic,gxbb-clkc.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/clock/amlogic,gxbb-clkc.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: (GPL-2.0-only OR BSD-2-Clause)
%YAML 1.2
---
$id: http://devicetree.org/schemas/clock/amlogic,gxbb-clkc.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Amlogic Clock Controller

maintainers:
  - Neil Armstrong <neil.armstrong@linaro.org>

properties:
  compatible:
    enum:
      - amlogic,gxbb-clkc
      - amlogic,gxl-clkc
      - amlogic,axg-clkc
      - amlogic,g12a-clkc
      - amlogic,g12b-clkc
      - amlogic,sm1-clkc

  clocks:
    maxItems: 1

  clock-names:
    const: xtal

  '#clock-cells':
    const: 1

required:
  - compatible
  - clocks
  - clock-names
  - '#clock-cells'

additionalProperties: false

```
