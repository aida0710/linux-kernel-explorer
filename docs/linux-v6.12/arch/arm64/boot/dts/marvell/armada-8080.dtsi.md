---
sidebar_position: 36
---
# armada-8080.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/marvell/armada-8080.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (C) 2017 Marvell Technology Group Ltd.
 *
 * Device Tree file for Marvell Armada-8080 SoC, made of an AP810 OCTA.
 */

#include "armada-ap810-ap0-octa-core.dtsi"

/ {
	model = "Marvell 8080 board";
	compatible = "marvell,armada-8080", "marvell,armada-ap810-octa",
				"marvell,armada-ap810";
};

```
