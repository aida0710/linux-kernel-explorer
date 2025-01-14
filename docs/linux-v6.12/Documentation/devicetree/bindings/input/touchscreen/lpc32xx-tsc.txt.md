---
sidebar_position: 29
---
# lpc32xx-tsc.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/input/touchscreen/lpc32xx-tsc.txt`

### コンテンツ

```txt
* NXP LPC32xx SoC Touchscreen Controller (TSC)

Required properties:
- compatible: must be "nxp,lpc3220-tsc"
- reg: physical base address of the controller and length of memory mapped
  region.
- interrupts: The TSC/ADC interrupt

Example:

	tsc@40048000 {
		compatible = "nxp,lpc3220-tsc";
		reg = <0x40048000 0x1000>;
		interrupt-parent = <&mic>;
		interrupts = <39 0>;
	};

```
