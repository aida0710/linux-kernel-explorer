---
sidebar_position: 290
---
# imx6qdl-pico-pi.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6qdl-pico-pi.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0+ OR MIT
//
// Copyright 2017 NXP

#include "imx6qdl-pico.dtsi"

/ {
	leds {
		compatible = "gpio-leds";
		pinctrl-names = "default";
		pinctrl-0 = <&pinctrl_gpio_leds>;

		led {
			label = "gpio-led";
			gpios = <&gpio5 18 GPIO_ACTIVE_HIGH>;
		};
	};

};

&hdmi {
	status = "disabled";
};

&iomuxc {
	pinctrl_gpio_leds: gpioledsgrp {
		fsl,pins = <
			MX6QDL_PAD_CSI0_PIXCLK__GPIO5_IO18	0x1b0b0
		>;
	};
};

```
