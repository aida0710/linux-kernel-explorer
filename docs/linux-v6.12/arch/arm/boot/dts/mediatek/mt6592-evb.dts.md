---
sidebar_position: 13
---
# mt6592-evb.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/mediatek/mt6592-evb.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (c) 2014 MediaTek Inc.
 * Author: Howard Chen <ibanezchen@gmail.com>
 *
 */

/dts-v1/;
#include "mt6592.dtsi"

/ {
	model = "mt6592 evb";
	compatible = "mediatek,mt6592-evb", "mediatek,mt6592";

	memory {
		device_type = "memory";
		reg = <0x80000000 0x40000000>;
	};
};

```
