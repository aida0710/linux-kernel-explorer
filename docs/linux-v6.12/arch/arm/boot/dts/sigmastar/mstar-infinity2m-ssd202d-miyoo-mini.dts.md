---
sidebar_position: 9
---
# mstar-infinity2m-ssd202d-miyoo-mini.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/sigmastar/mstar-infinity2m-ssd202d-miyoo-mini.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright (c) 2021 thingy.jp.
 * Author: Daniel Palmer <daniel@thingy.jp>
 */

/dts-v1/;
#include "mstar-infinity2m-ssd202d.dtsi"

/ {
	model = "Miyoo Mini";
	compatible = "miyoo,miyoo-mini", "mstar,infinity2m";

	aliases {
		serial0 = &pm_uart;
	};

	chosen {
		stdout-path = "serial0:115200n8";
	};
};

&pm_uart {
	status = "okay";
};

```
