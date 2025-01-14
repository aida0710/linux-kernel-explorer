---
sidebar_position: 5
---
# tigerp.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/freescale/tigerp.txt`

### コンテンツ

```txt
* Freescale Tigerp platform module

Required properties:
- compatible : Should be "fsl,imx51-tigerp"
- reg : Address and length of the register set for the device

Example:

tigerp: tigerp@83fa0000 {
	compatible = "fsl,imx51-tigerp";
	reg = <0x83fa0000 0x28>;
};

```
