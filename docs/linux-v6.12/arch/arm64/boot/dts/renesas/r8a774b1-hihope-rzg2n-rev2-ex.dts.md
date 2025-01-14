---
sidebar_position: 32
---
# r8a774b1-hihope-rzg2n-rev2-ex.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/renesas/r8a774b1-hihope-rzg2n-rev2-ex.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Device Tree Source for the HiHope RZ/G2N Rev.2.0 connected to sub board
 *
 * Copyright (C) 2019 Renesas Electronics Corp.
 */

#include "r8a774b1-hihope-rzg2n-rev2.dts"
#include "hihope-rzg2-ex.dtsi"

/ {
	model = "HopeRun HiHope RZ/G2N (Rev.2.0) with sub board";
	compatible = "hoperun,hihope-rzg2-ex", "hoperun,hihope-rzg2n",
		     "renesas,r8a774b1";
};

```
