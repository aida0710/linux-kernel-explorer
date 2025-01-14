---
sidebar_position: 40
---
# fsl,tcon.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/display/fsl,tcon.txt`

### コンテンツ

```txt
Device Tree bindings for Freescale TCON Driver

Required properties:
- compatible:		Should be one of
	* "fsl,vf610-tcon".

- reg:			Address and length of the register set for tcon.
- clocks:		From common clock binding: handle to tcon ipg clock.
- clock-names:		From common clock binding: Shall be "ipg".

Examples:
timing-controller@4003d000 {
	compatible = "fsl,vf610-tcon";
	reg = <0x4003d000 0x1000>;
	clocks = <&clks VF610_CLK_TCON0>;
	clock-names = "ipg";
};

```
