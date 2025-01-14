---
sidebar_position: 74
---
# meson-gxbb-vega-s95-telos.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/amlogic/meson-gxbb-vega-s95-telos.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2016 Andreas Färber
 */

/dts-v1/;

#include "meson-gxbb-vega-s95.dtsi"

/ {
	compatible = "tronsmart,vega-s95-telos", "tronsmart,vega-s95", "amlogic,meson-gxbb";
	model = "Tronsmart Vega S95 Telos";

	memory@0 {
		device_type = "memory";
		reg = <0x0 0x0 0x0 0x80000000>;
	};
};

```
