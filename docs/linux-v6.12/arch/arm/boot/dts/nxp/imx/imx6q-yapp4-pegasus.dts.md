---
sidebar_position: 233
---
# imx6q-yapp4-pegasus.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6q-yapp4-pegasus.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
//
// Copyright (C) 2021 Y Soft Corporation, a.s.

/dts-v1/;

#include "imx6q.dtsi"
#include "imx6dl-yapp43-common.dtsi"

/ {
	model = "Y Soft IOTA Pegasus i.MX6Quad board";
	compatible = "ysoft,imx6q-yapp4-pegasus", "fsl,imx6q";

	memory@10000000 {
		device_type = "memory";
		reg = <0x10000000 0xf0000000>;
	};
};

&gpio_oled {
	status = "okay";
};

&i2c3 {
	status = "okay";
};

&leds {
	status = "okay";
};

&oled_1305 {
	status = "okay";
};

&oled_1309 {
	status = "okay";
};

&reg_pu {
	regulator-always-on;
};

&reg_usb_h1_vbus {
	status = "okay";
};

&touchkeys {
	status = "okay";
};

&usbh1 {
	status = "okay";
};

&usbphy2 {
	status = "okay";
};

```
