---
sidebar_position: 3
---
# px30-engicam-ctouch2.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/rockchip/px30-engicam-ctouch2.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2020 Engicam srl
 * Copyright (c) 2020 Amarula Solutions
 * Copyright (c) 2020 Amarula Solutions(India)
 */

#include "px30-engicam-common.dtsi"

&pinctrl {
	bt {
		bt_enable_h: bt-enable-h {
			rockchip,pins = <1 RK_PC3 RK_FUNC_GPIO &pcfg_pull_none>;
		};
	};

	sdio-pwrseq {
		wifi_enable_h: wifi-enable-h {
			rockchip,pins = <1 RK_PC2 RK_FUNC_GPIO &pcfg_pull_none>;
		};
	};
};

&sdio_pwrseq {
	reset-gpios = <&gpio1 RK_PC2 GPIO_ACTIVE_LOW>;
};

&vcc3v3_btreg {
	enable-gpios = <&gpio1 RK_PC3 GPIO_ACTIVE_HIGH>;
};

```
