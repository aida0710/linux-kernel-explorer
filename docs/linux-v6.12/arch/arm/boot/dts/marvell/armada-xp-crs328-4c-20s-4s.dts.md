---
sidebar_position: 65
---
# armada-xp-crs328-4c-20s-4s.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/marvell/armada-xp-crs328-4c-20s-4s.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Device Tree file for MikroTik CRS328-4C-20S-4S+ board
 *
 * Copyright (C) 2020 Sartura Ltd.
 * Author: Luka Kovacic <luka.kovacic@sartura.hr>
 */

#include "armada-xp-crs328-4c-20s-4s.dtsi"

/ {
	model = "MikroTik CRS328-4C-20S-4S+";
};

&spi0 {
	status = "okay";
};

```
