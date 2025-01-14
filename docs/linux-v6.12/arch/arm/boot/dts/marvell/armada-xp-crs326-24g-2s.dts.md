---
sidebar_position: 62
---
# armada-xp-crs326-24g-2s.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/marvell/armada-xp-crs326-24g-2s.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Device Tree file for MikroTik CRS326-24G-2S+ board
 *
 * Copyright (C) 2020 Sartura Ltd.
 * Author: Luka Kovacic <luka.kovacic@sartura.hr>
 */

#include "armada-xp-crs326-24g-2s.dtsi"

/ {
	model = "MikroTik CRS326-24G-2S+";
};

&spi0 {
	status = "okay";
};

```
