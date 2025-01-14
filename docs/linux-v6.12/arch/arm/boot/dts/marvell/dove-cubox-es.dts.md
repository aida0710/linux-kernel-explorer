---
sidebar_position: 82
---
# dove-cubox-es.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/marvell/dove-cubox-es.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
#include "dove-cubox.dts"

/ {
	model = "SolidRun CuBox (Engineering Sample)";
	compatible = "solidrun,cubox-es", "solidrun,cubox", "marvell,dove";
};

&sdio0 {
	/* sdio0 card detect is connected to wrong pin on CuBox ES */
	cd-gpios = <&gpio0 12 1>;
	pinctrl-0 = <&pmx_sdio0 &pmx_gpio_12>;
};

```
