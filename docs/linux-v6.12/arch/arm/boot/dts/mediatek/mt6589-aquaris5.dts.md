---
sidebar_position: 10
---
# mt6589-aquaris5.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/mediatek/mt6589-aquaris5.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0+
/*
 * Copyright (c) 2014 MundoReader S.L.
 * Author: Matthias Brugger <matthias.bgg@gmail.com>
 *
 */

/dts-v1/;
#include "mt6589.dtsi"

/ {
	model = "bq Aquaris5";
	compatible = "mundoreader,bq-aquaris5", "mediatek,mt6589";

	chosen {
		bootargs = "console=ttyS0,921600n8 earlyprintk";
		stdout-path = &uart0;
	};

	memory {
		device_type = "memory";
		reg = <0x80000000 0x40000000>;
	};

};

&uart0 {
	status = "okay";
};

&uart3 {
	status = "okay";
};

```
