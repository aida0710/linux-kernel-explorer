---
sidebar_position: 19
---
# xlnx,versal-fpga.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/fpga/xlnx,versal-fpga.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: (GPL-2.0-only OR BSD-2-Clause)
%YAML 1.2
---
$id: http://devicetree.org/schemas/fpga/xlnx,versal-fpga.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Xilinx Versal FPGA driver.

maintainers:
  - Nava kishore Manne <nava.kishore.manne@amd.com>

description: |
  Device Tree Versal FPGA bindings for the Versal SoC, controlled
  using firmware interface.

properties:
  compatible:
    items:
      - enum:
          - xlnx,versal-fpga

required:
  - compatible

additionalProperties: false

examples:
  - |
    versal_fpga: versal-fpga {
         compatible = "xlnx,versal-fpga";
    };

...

```
