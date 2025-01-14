---
sidebar_position: 3
---
# mstar-infinity-msc313-breadbee_crust.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/sigmastar/mstar-infinity-msc313-breadbee_crust.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (c) 2019 thingy.jp.
 * Author: Daniel Palmer <daniel@thingy.jp>
 */

/dts-v1/;
#include "mstar-infinity-msc313.dtsi"
#include "mstar-infinity-breadbee-common.dtsi"

/ {
	model = "BreadBee Crust";
	compatible = "thingyjp,breadbee-crust", "mstar,infinity";

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
