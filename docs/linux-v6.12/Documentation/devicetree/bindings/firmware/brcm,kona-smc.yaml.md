---
sidebar_position: 4
---
# brcm,kona-smc.yaml

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/firmware/brcm,kona-smc.yaml`

### コンテンツ

```yaml
# SPDX-License-Identifier: GPL-2.0-only OR BSD-2-Clause
%YAML 1.2
---
$id: http://devicetree.org/schemas/firmware/brcm,kona-smc.yaml#
$schema: http://devicetree.org/meta-schemas/core.yaml#

title: Broadcom Kona family Secure Monitor bounce buffer

description:
  A bounce buffer used for non-secure to secure communications.

maintainers:
  - Florian Fainelli <f.fainelli@gmail.com>

properties:
  compatible:
    items:
      - enum:
          - brcm,bcm11351-smc
          - brcm,bcm21664-smc
          - brcm,bcm23550-smc
      - const: brcm,kona-smc

  reg:
    maxItems: 1

required:
  - compatible
  - reg

additionalProperties: false

examples:
  - |
    smc@3404c000 {
        compatible = "brcm,bcm11351-smc", "brcm,kona-smc";
        reg = <0x3404c000 0x400>; /* 1 KiB in SRAM */
    };
...

```
