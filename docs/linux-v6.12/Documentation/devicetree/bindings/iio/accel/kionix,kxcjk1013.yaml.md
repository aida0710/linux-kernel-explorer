---
sidebar_position: 16
---
# kionix,kxcjk1013.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/iio/accel/kionix,kxcjk1013.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: (GPL-2.0 OR BSD-2-Clause)
%YAML 1.2
---
$id: http://devicetree.org/schemas/iio/accel/kionix,kxcjk1013.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Kionix KXCJK-1013 Accelerometer

maintainers:
  - Robert Yang <decatf@gmail.com>

properties:
  compatible:
    enum:
      - kionix,kxcjk1013
      - kionix,kxcj91008
      - kionix,kxtj21009
      - kionix,kxtf9
      - kionix,kx022-1020
      - kionix,kx023-1025

  reg:
    maxItems: 1

  interrupts:
    maxItems: 1

  vdd-supply: true
  vddio-supply: true

  mount-matrix:
    description: an optional 3x3 mounting rotation matrix.

required:
  - compatible
  - reg

additionalProperties: false

examples:
  - |
    i2c {
        #address-cells = <1>;
        #size-cells = <0>;

        accel@f {
            compatible = "kionix,kxtf9";
            reg = <0xf>;
            mount-matrix = "0", "1", "0",
                           "1", "0", "0",
                           "0", "0", "1";
        };
    };
...

```
