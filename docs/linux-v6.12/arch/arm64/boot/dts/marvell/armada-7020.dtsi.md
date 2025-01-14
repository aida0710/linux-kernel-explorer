---
sidebar_position: 23
---
# armada-7020.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/marvell/armada-7020.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (C) 2016 Marvell Technology Group Ltd.
 *
 * Device Tree file for the Armada 7020 SoC, made of an AP806 Dual and
 * one CP110.
 */

#include "armada-ap806-dual.dtsi"
#include "armada-70x0.dtsi"

/ {
	model = "Marvell Armada 7020";
	compatible = "marvell,armada7020", "marvell,armada-ap806-dual",
		     "marvell,armada-ap806";
};

```
