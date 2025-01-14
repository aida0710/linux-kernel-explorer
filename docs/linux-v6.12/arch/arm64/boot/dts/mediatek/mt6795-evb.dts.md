---
sidebar_position: 14
---
# mt6795-evb.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt6795-evb.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (c) 2015 MediaTek Inc.
 * Author: Mars.C <mars.cheng@mediatek.com>
 */

/dts-v1/;
#include "mt6795.dtsi"

/ {
	model = "MediaTek MT6795 Evaluation Board";
	chassis-type = "embedded";
	compatible = "mediatek,mt6795-evb", "mediatek,mt6795";

	aliases {
		serial0 = &uart0;
		serial1 = &uart1;
		serial2 = &uart2;
		serial3 = &uart3;
	};

	memory@40000000 {
		device_type = "memory";
		reg = <0 0x40000000 0 0x1e800000>;
	};

	chosen {
		stdout-path = "serial0:921600n8";
	};
};

&uart0 {
	status = "okay";
};

```
