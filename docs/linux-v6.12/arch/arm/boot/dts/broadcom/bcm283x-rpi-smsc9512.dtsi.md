---
sidebar_position: 10
---
# bcm283x-rpi-smsc9512.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/broadcom/bcm283x-rpi-smsc9512.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0
/ {
	aliases {
		ethernet0 = &ethernet;
	};
};

&usb {
	usb1@1 {
		compatible = "usb424,9512";
		reg = <1>;
		#address-cells = <1>;
		#size-cells = <0>;

		ethernet: ethernet@1 {
			compatible = "usb424,ec00";
			reg = <1>;
		};
	};
};

```
