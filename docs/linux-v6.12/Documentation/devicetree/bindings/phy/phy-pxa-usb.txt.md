---
sidebar_position: 104
---
# phy-pxa-usb.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/phy/phy-pxa-usb.txt`

### コンテンツ

```txt
Marvell PXA USB PHY
-------------------

Required properties:
- compatible: one of: "marvell,mmp2-usb-phy", "marvell,pxa910-usb-phy",
	"marvell,pxa168-usb-phy",
- #phy-cells: must be 0

Example:
	usb-phy: usbphy@d4207000 {
		compatible = "marvell,mmp2-usb-phy";
		reg = <0xd4207000 0x40>;
		#phy-cells = <0>;
		status = "okay";
	};

This document explains the device tree binding. For general
information about PHY subsystem refer to Documentation/driver-api/phy/phy.rst

```
