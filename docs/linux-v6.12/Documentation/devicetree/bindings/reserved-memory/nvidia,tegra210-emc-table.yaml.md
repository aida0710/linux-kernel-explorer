---
sidebar_position: 2
---
# nvidia,tegra210-emc-table.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/reserved-memory/nvidia,tegra210-emc-table.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: (GPL-2.0 OR BSD-2-Clause)
%YAML 1.2
---
$id: http://devicetree.org/schemas/reserved-memory/nvidia,tegra210-emc-table.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: NVIDIA Tegra210 EMC Frequency Table

maintainers:
  - Thierry Reding <thierry.reding@gmail.com>
  - Jon Hunter <jonathanh@nvidia.com>

description: On Tegra210, firmware passes a binary representation of the
  EMC frequency table via a reserved memory region.

allOf:
  - $ref: reserved-memory.yaml

properties:
  compatible:
    const: nvidia,tegra210-emc-table

  reg:
    description: region of memory reserved by firmware to pass the EMC
      frequency table

unevaluatedProperties: false

required:
  - compatible
  - reg

```
