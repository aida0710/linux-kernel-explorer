---
sidebar_position: 171
---
# rk3568-wolfvision-pf5-display-vz.dtso

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/rockchip/rk3568-wolfvision-pf5-display-vz.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: (GPL-2.0-or-later OR MIT)
/*
 * Device tree overlay for the WolfVision PF5 Visualizer display.
 *
 * Copyright (C) 2024 WolfVision GmbH.
 */

/dts-v1/;
/plugin/;

#include "rk3568-wolfvision-pf5-display.dtsi"

&st7789 {
	compatible = "jasonic,jt240mhqs-hwt-ek-e3",
		     "sitronix,st7789v";
	rotation = <270>;
};

```
