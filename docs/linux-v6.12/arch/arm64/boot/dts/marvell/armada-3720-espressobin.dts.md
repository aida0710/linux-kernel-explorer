---
sidebar_position: 17
---
# armada-3720-espressobin.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/marvell/armada-3720-espressobin.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Device Tree file for Globalscale Marvell ESPRESSOBin Board
 * Copyright (C) 2016 Marvell
 *
 * Romain Perier <romain.perier@free-electrons.com>
 *
 */
/*
 * Schematic available at http://espressobin.net/wp-content/uploads/2017/08/ESPRESSObin_V5_Schematics.pdf
 */

/dts-v1/;

#include "armada-3720-espressobin.dtsi"

/ {
	model = "Globalscale Marvell ESPRESSOBin Board";
	compatible = "globalscale,espressobin", "marvell,armada3720", "marvell,armada3700";
};

```
