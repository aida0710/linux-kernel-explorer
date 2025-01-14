---
sidebar_position: 32
---
# bcm2835-rpi-common.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/broadcom/bcm2835-rpi-common.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0
/*
 * This include file covers the common peripherals and configuration between
 * bcm2835, bcm2836 and bcm2837 implementations that interact with RPi's
 * firmware interface.
 */

#include <dt-bindings/power/raspberrypi-power.h>

&hdmi {
	clocks = <&firmware_clocks 9>,
		 <&firmware_clocks 13>;
	clock-names = "pixel", "hdmi";
};

&v3d {
	power-domains = <&power RPI_POWER_DOMAIN_V3D>;
};

&vec {
	clocks = <&firmware_clocks 15>;
};

```
