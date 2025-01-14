---
sidebar_position: 529
---
# imx7s-colibri.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx7s-colibri.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2016-2022 Toradex
 */

#include "imx7s.dtsi"
#include "imx7-colibri.dtsi"

/ {
	memory@80000000 {
		device_type = "memory";
		reg = <0x80000000 0x10000000>;
	};
};

/* NAND */
&gpmi {
	status = "okay";
};

```
