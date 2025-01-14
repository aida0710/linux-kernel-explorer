---
sidebar_position: 1
---
# ftm-quaddec.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/counter/ftm-quaddec.txt`

### コンテンツ

```txt
FlexTimer Quadrature decoder counter

This driver exposes a simple counter for the quadrature decoder mode.

Required properties:
- compatible:		Must be "fsl,ftm-quaddec".
- reg:			Must be set to the memory region of the flextimer.

Optional property:
- big-endian:		Access the device registers in big-endian mode.

Example:
		counter0: counter@29d0000 {
			compatible = "fsl,ftm-quaddec";
			reg = <0x0 0x29d0000 0x0 0x10000>;
			big-endian;
			status = "disabled";
		};

```
