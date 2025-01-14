---
sidebar_position: 99
---
# dai-common.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/sound/dai-common.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: (GPL-2.0-only OR BSD-2-Clause)
%YAML 1.2
---
$id: http://devicetree.org/schemas/sound/dai-common.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Digital Audio Interface Common Properties

maintainers:
  - Jerome Brunet <jbrunet@baylibre.com>

allOf:
  - $ref: component-common.yaml#

properties:
  '#sound-dai-cells': true

additionalProperties: true

```
