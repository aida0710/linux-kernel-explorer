---
sidebar_position: 95
---
# phy-hi6220-usb.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/phy/phy-hi6220-usb.txt`

### コンテンツ

```txt
Hisilicon hi6220 usb PHY
-----------------------

Required properties:
- compatible: should be "hisilicon,hi6220-usb-phy"
- #phy-cells: must be 0
- hisilicon,peripheral-syscon: phandle of syscon used to control phy.
Refer to phy/phy-bindings.txt for the generic PHY binding properties

Example:
	usb_phy: usbphy {
		compatible = "hisilicon,hi6220-usb-phy";
		#phy-cells = <0>;
		phy-supply = <&fixed_5v_hub>;
		hisilicon,peripheral-syscon = <&sys_ctrl>;
	};

```
