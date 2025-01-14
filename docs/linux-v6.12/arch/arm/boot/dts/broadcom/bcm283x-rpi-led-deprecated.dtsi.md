---
sidebar_position: 9
---
# bcm283x-rpi-led-deprecated.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/broadcom/bcm283x-rpi-led-deprecated.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0

/ {
	/*
	 * This file provides the now deprecated ACT LED to the
	 * Raspberry Pi boards. Please don't include this file
	 * for new boards!
	 */
	leds: leds {
		compatible = "gpio-leds";

		led_act: led-act {
			label = "ACT";
			default-state = "keep";
			linux,default-trigger = "heartbeat";
		};
	};
};

```
