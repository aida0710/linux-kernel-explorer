---
sidebar_position: 48
---
# k3-am64-tqma64xxl-mbax4xxl-sdcard.dtso

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/ti/k3-am64-tqma64xxl-mbax4xxl-sdcard.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0-only OR MIT
/*
 * Copyright (c) 2022-2024 TQ-Systems GmbH <linux@ew.tq-group.com>, D-82229 Seefeld, Germany.
 */

/dts-v1/;
/plugin/;

&sdhci1 {
	vmmc-supply = <&reg_sd>;
	no-sdio;
	status = "okay";
};

&main_gpio0 {
	line43-hog {
		gpio-hog;
		gpios = <43 0>;
		line-name = "MMC1_CTRL";
		output-low;
	};
};

```
