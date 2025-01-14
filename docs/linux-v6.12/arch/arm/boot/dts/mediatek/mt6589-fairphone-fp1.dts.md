---
sidebar_position: 11
---
# mt6589-fairphone-fp1.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/mediatek/mt6589-fairphone-fp1.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: BSD-3-Clause
/*
 * Copyright (c) 2021, Luca Weiss <luca@z3ntu.xyz>
 */

/dts-v1/;
#include "mt6589.dtsi"

/ {
	model = "Fairphone 1";
	compatible = "fairphone,fp1", "mediatek,mt6589";

	chosen {
		stdout-path = &uart3;
	};

	memory@80000000 {
		device_type = "memory";
		reg = <0x80000000 0x40000000>;
	};
};

&cpus {
	/* SMP is not stable on this board, makes the kernel panic */
	/delete-property/ enable-method;
};

&uart3 {
	status = "okay";
};

```
