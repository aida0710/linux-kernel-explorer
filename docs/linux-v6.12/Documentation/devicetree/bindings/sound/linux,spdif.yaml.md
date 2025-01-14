---
sidebar_position: 154
---
# linux,spdif.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/sound/linux,spdif.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/sound/linux,spdif.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Dummy SPDIF Transmitter/Receiver

maintainers:
  - Mark Brown <broonie@kernel.org>

allOf:
  - $ref: dai-common.yaml#

properties:
  compatible:
    enum:
      - linux,spdif-dit
      - linux,spdif-dir

  "#sound-dai-cells":
    const: 0

  sound-name-prefix: true

required:
  - "#sound-dai-cells"
  - compatible

additionalProperties: false

examples:
  - |
    spdif-out {
        #sound-dai-cells = <0>;
        compatible = "linux,spdif-dit";
    };

...

```
