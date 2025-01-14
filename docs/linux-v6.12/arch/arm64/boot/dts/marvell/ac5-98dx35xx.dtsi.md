---
sidebar_position: 3
---
# ac5-98dx35xx.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/marvell/ac5-98dx35xx.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Device Tree For AC5X.
 *
 * Copyright (C) 2022 Allied Telesis Labs
 */

#include "ac5-98dx25xx.dtsi"

/ {
	model = "Marvell AC5X SoC";
	compatible = "marvell,ac5x", "marvell,ac5";
};

&cnm_clock {
	clock-frequency = <325000000>;
};

```
