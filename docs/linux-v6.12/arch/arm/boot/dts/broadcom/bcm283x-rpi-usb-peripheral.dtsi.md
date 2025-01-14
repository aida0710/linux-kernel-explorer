---
sidebar_position: 14
---
# bcm283x-rpi-usb-peripheral.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/broadcom/bcm283x-rpi-usb-peripheral.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0
&usb {
	dr_mode = "peripheral";
	g-rx-fifo-size = <256>;
	g-np-tx-fifo-size = <32>;
	g-tx-fifo-size = <256 256 512 512 512 768 768>;
};

```
