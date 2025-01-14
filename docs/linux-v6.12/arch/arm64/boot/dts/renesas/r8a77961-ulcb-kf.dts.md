---
sidebar_position: 95
---
# r8a77961-ulcb-kf.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/renesas/r8a77961-ulcb-kf.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Device Tree Source for the M3ULCB Kingfisher board with R-Car M3-W+
 *
 * Copyright (C) 2020 Eugeniu Rosca <rosca.eugeniu@gmail.com>
 */

#include "r8a77961-ulcb.dts"
#include "ulcb-kf.dtsi"

/ {
	model = "Renesas M3ULCB Kingfisher board based on r8a77961";
	compatible = "shimafuji,kingfisher", "renesas,m3ulcb",
		     "renesas,r8a77961";
};

```
