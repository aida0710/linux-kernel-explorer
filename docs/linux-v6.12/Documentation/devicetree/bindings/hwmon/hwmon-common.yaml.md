---
sidebar_position: 26
---
# hwmon-common.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/hwmon/hwmon-common.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0 OR BSD-2-Clause
%YAML 1.2
---
$id: http://devicetree.org/schemas/hwmon/hwmon-common.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Hardware Monitoring Devices Common Properties

maintainers:
  - Guenter Roeck <linux@roeck-us.net>

properties:
  label:
    description: A descriptive name for this device.

  shunt-resistor-micro-ohms:
    description: The value of current sense resistor.

additionalProperties: true

```
