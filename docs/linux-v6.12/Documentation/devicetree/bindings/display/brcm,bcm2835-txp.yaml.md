---
sidebar_position: 29
---
# brcm,bcm2835-txp.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/display/brcm,bcm2835-txp.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0
%YAML 1.2
---
$id: http://devicetree.org/schemas/display/brcm,bcm2835-txp.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Broadcom VC4 (VideoCore4) TXP (writeback) Controller

maintainers:
  - Eric Anholt <eric@anholt.net>

properties:
  compatible:
    const: brcm,bcm2835-txp

  reg:
    maxItems: 1

  interrupts:
    maxItems: 1

required:
  - compatible
  - reg
  - interrupts

additionalProperties: false

examples:
  - |
    txp: txp@7e004000 {
        compatible = "brcm,bcm2835-txp";
        reg = <0x7e004000 0x20>;
        interrupts = <1 11>;
    };

...

```
