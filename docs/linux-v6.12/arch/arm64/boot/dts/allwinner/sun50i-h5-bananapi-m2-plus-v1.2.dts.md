---
sidebar_position: 27
---
# sun50i-h5-bananapi-m2-plus-v1.2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/allwinner/sun50i-h5-bananapi-m2-plus-v1.2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
// Copyright (C) 2018 Chen-Yu Tsai <wens@csie.org>

/dts-v1/;
#include "sun50i-h5.dtsi"
#include "sun50i-h5-cpu-opp.dtsi"
#include <arm/allwinner/sunxi-bananapi-m2-plus-v1.2.dtsi>

/ {
	model = "Banana Pi BPI-M2-Plus v1.2 H5";
	compatible = "bananapi,bpi-m2-plus-v1.2", "allwinner,sun50i-h5";
};

```
