---
sidebar_position: 203
---
# pxa-clock.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/clock/pxa-clock.txt`

### コンテンツ

```txt
* Clock bindings for Marvell PXA chips

Required properties:
- compatible: Should be "marvell,pxa-clocks"
- #clock-cells: Should be <1>

The clock consumer should specify the desired clock by having the clock
ID in its "clocks" phandle cell (see include/.../pxa-clock.h).

Examples:

pxa2xx_clks: pxa2xx_clks@41300004 {
        compatible = "marvell,pxa-clocks";
        #clock-cells = <1>;
};

```
