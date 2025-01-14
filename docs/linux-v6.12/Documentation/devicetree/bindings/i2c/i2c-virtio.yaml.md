---
sidebar_position: 48
---
# i2c-virtio.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/i2c/i2c-virtio.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: (GPL-2.0-only OR BSD-2-Clause)
%YAML 1.2
---
$id: http://devicetree.org/schemas/i2c/i2c-virtio.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Virtio I2C Adapter

maintainers:
  - Viresh Kumar <viresh.kumar@linaro.org>

allOf:
  - $ref: /schemas/i2c/i2c-controller.yaml#
  - $ref: /schemas/virtio/virtio-device.yaml#

description:
  Virtio I2C device, see /schemas/virtio/virtio-device.yaml for more details.

properties:
  $nodename:
    const: i2c

  compatible:
    const: virtio,device22

required:
  - compatible

unevaluatedProperties: false

examples:
  - |
    virtio@3000 {
        compatible = "virtio,mmio";
        reg = <0x3000 0x100>;
        interrupts = <41>;

        i2c {
            compatible = "virtio,device22";

            #address-cells = <1>;
            #size-cells = <0>;

            light-sensor@20 {
                compatible = "dynaimage,al3320a";
                reg = <0x20>;
            };
        };
    };

...

```
