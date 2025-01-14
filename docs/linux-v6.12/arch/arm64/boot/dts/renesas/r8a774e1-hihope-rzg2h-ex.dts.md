---
sidebar_position: 44
---
# r8a774e1-hihope-rzg2h-ex.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/renesas/r8a774e1-hihope-rzg2h-ex.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Device Tree Source for the HiHope RZ/G2H sub board
 *
 * Copyright (C) 2020 Renesas Electronics Corp.
 */

#include "r8a774e1-hihope-rzg2h.dts"
#include "hihope-rzg2-ex.dtsi"

/ {
	model = "HopeRun HiHope RZ/G2H with sub board";
	compatible = "hoperun,hihope-rzg2-ex", "hoperun,hihope-rzg2h",
		     "renesas,r8a774e1";
};

/* Set SW43 = ON and SW1001[7] = OFF for SATA port to be activated */
&sata {
	status = "okay";
};

```
