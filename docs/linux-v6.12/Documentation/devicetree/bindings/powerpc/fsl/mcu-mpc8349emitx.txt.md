---
sidebar_position: 10
---
# mcu-mpc8349emitx.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/powerpc/fsl/mcu-mpc8349emitx.txt`

### コンテンツ

```txt
Freescale MPC8349E-mITX-compatible Power Management Micro Controller Unit (MCU)

Required properties:
- compatible : "fsl,<mcu-chip>-<board>", "fsl,mcu-mpc8349emitx".
- reg : should specify I2C address (0x0a).
- #gpio-cells : should be 2.
- gpio-controller : should be present.

Example:

mcu@a {
	#gpio-cells = <2>;
	compatible = "fsl,mc9s08qg8-mpc8349emitx",
		     "fsl,mcu-mpc8349emitx";
	reg = <0x0a>;
	gpio-controller;
};

```
