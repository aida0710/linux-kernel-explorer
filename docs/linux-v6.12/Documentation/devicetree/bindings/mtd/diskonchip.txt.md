---
sidebar_position: 11
---
# diskonchip.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/mtd/diskonchip.txt`

### コンテンツ

```txt
M-Systems and Sandisk DiskOnChip devices

M-System DiskOnChip G3
======================
The Sandisk (formerly M-Systems) docg3 is a nand device of 64M to 256MB.

Required properties:
 - compatible: should be "m-systems,diskonchip-g3"
 - reg: register base and size

Example:
	docg3: flash@0 {
		compatible = "m-systems,diskonchip-g3";
		reg = <0x0 0x2000>;
	};

```
