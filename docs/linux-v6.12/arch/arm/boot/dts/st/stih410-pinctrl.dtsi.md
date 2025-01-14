---
sidebar_position: 60
---
# stih410-pinctrl.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/st/stih410-pinctrl.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2014 STMicroelectronics Limited.
 * Author: Peter Griffin <peter.griffin@linaro.org>
 */
#include "st-pincfg.h"
/ {

	soc {
		pin-controller-rear@922f080 {

			usb0 {
				pinctrl_usb0: usb2-0 {
					st,pins {
						usb-oc-detect = <&pio35 0 ALT1 IN>;
						usb-pwr-enable = <&pio35 1 ALT1 OUT>;
					};
				};
			};

			usb1 {
				pinctrl_usb1: usb2-1 {
					st,pins {
						usb-oc-detect = <&pio35 2 ALT1 IN>;
						usb-pwr-enable = <&pio35 3 ALT1 OUT>;
					};
				};
			};
		};
	};
};

```
