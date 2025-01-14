---
sidebar_position: 89
---
# phy-ath79-usb.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/phy/phy-ath79-usb.txt`

### コンテンツ

```txt
* Atheros AR71XX/9XXX USB PHY

Required properties:
- compatible: "qca,ar7100-usb-phy"
- #phys-cells: should be 0
- reset-names: "phy"[, "suspend-override"]
- resets: references to the reset controllers

Example:

	usb-phy {
		compatible = "qca,ar7100-usb-phy";

		reset-names = "phy", "suspend-override";
		resets = <&rst 4>, <&rst 3>;

		#phy-cells = <0>;
	};

```
