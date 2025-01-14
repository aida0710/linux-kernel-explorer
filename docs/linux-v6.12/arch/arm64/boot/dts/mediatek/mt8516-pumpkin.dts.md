---
sidebar_position: 139
---
# mt8516-pumpkin.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8516-pumpkin.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (c) 2019 BayLibre, SAS.
 * Author: Fabien Parent <fparent@baylibre.com>
 */

/dts-v1/;

#include "mt8516.dtsi"
#include "pumpkin-common.dtsi"

/ {
	model = "Pumpkin MT8516";
	compatible = "mediatek,mt8516";

	memory@40000000 {
		device_type = "memory";
		reg = <0 0x40000000 0 0x40000000>;
	};
};

```
