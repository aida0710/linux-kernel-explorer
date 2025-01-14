---
sidebar_position: 2
---
# synquacer.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/socionext/synquacer.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0-only OR BSD-2-Clause
%YAML 1.2
---
$id: http://devicetree.org/schemas/arm/socionext/synquacer.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Socionext Synquacer platform

maintainers:
  - Masahisa Kojima <masahisa.kojima@linaro.org>
  - Jassi Brar <jaswinder.singh@linaro.org>

description:
  Socionext SC2A11B (Synquacer) SoC based boards

properties:
  $nodename:
    const: '/'
  compatible:
    oneOf:
      - items:
          - enum:
              - socionext,developer-box
          - const: socionext,synquacer

additionalProperties: true

...

```
