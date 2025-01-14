---
sidebar_position: 10
---
# ampere,smpro.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/mfd/ampere,smpro.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: (GPL-2.0-only OR BSD-2-Clause)
%YAML 1.2
---
$id: http://devicetree.org/schemas/mfd/ampere,smpro.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Ampere Altra SMPro firmware driver

maintainers:
  - Quan Nguyen <quan@os.amperecomputing.com>

description: |
  Ampere Altra SMPro firmware may contain different blocks like hardware
  monitoring, error monitoring and other miscellaneous features.

properties:
  compatible:
    enum:
      - ampere,smpro

  reg:
    description:
      I2C device address.
    maxItems: 1

required:
  - compatible
  - reg

additionalProperties: false

examples:
  - |
    i2c {
        #address-cells = <1>;
        #size-cells = <0>;

        smpro@4f {
            compatible = "ampere,smpro";
            reg = <0x4f>;
        };
    };

```
