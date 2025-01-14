---
sidebar_position: 42
---
# power-supply.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/power/supply/power-supply.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/power/supply/power-supply.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Power Supply Core Support

maintainers:
  - Sebastian Reichel <sre@kernel.org>

properties:
  power-supplies:
    $ref: /schemas/types.yaml#/definitions/phandle-array
    items:
      maxItems: 1
    description:
      This property is added to a supply in order to list the devices which
      supply it power, referenced by their phandles.

  monitored-battery:
    $ref: /schemas/types.yaml#/definitions/phandle
    description:
      The battery (with "simple-battery" compatible) being monitored by this
      power supply.

additionalProperties: true

```
