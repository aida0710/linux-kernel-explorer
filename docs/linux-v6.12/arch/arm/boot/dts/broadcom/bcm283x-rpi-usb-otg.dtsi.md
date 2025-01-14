---
sidebar_position: 13
---
# bcm283x-rpi-usb-otg.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/broadcom/bcm283x-rpi-usb-otg.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0
&usb {
	dr_mode = "otg";
	g-rx-fifo-size = <256>;
	g-np-tx-fifo-size = <32>;
	/*
	 * According to dwc2 the sum of all device EP
	 * fifo sizes shouldn't exceed 3776 bytes.
	 */
	g-tx-fifo-size = <256 256 512 512 512 768 768>;
};

```
