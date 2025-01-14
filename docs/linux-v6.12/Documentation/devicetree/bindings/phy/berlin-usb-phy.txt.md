---
sidebar_position: 29
---
# berlin-usb-phy.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/phy/berlin-usb-phy.txt`

### コンテンツ

```txt
* Marvell Berlin USB PHY

Required properties:
- compatible: "marvell,berlin2-usb-phy" or "marvell,berlin2cd-usb-phy"
- reg: base address and length of the registers
- #phys-cells: should be 0
- resets: reference to the reset controller

Example:

	usb-phy@f774000 {
		compatible = "marvell,berlin2-usb-phy";
		reg = <0xf774000 0x128>;
		#phy-cells = <0>;
		resets = <&chip 0x104 14>;
	};

```
