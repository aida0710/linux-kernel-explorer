---
sidebar_position: 31
---
# qcom-ipq4018-ap120c-ac-bit.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/qcom/qcom-ipq4018-ap120c-ac-bit.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT

#include <dt-bindings/leds/common.h>
#include "qcom-ipq4018-ap120c-ac.dtsi"

/ {
	model = "ALFA Network AP120C-AC Bit";

	leds {
		compatible = "gpio-leds";

		led-power {
			label = "ap120c-ac:green:power";
			function = LED_FUNCTION_POWER;
			color = <LED_COLOR_ID_GREEN>;
			gpios = <&tlmm 5 GPIO_ACTIVE_LOW>;
			default-state = "on";
		};

		led-wlan {
			label = "ap120c-ac:green:wlan";
			function = LED_FUNCTION_WLAN;
			color = <LED_COLOR_ID_GREEN>;
			gpios = <&tlmm 3 GPIO_ACTIVE_HIGH>;
		};

		led-support {
			label = "ap120c-ac:green:support";
			color = <LED_COLOR_ID_GREEN>;
			gpios = <&tlmm 2 GPIO_ACTIVE_HIGH>;
			panic-indicator;
		};
	};
};

```
