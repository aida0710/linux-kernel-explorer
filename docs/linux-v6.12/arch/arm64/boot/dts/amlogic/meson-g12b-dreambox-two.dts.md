---
sidebar_position: 42
---
# meson-g12b-dreambox-two.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/amlogic/meson-g12b-dreambox-two.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2019 Christian Hewitt <christianshewitt@gmail.com>
 */

/dts-v1/;

#include "meson-g12b-dreambox.dtsi"

/ {
	compatible = "dream,dreambox-two", "amlogic,s922x", "amlogic,g12b";
	model = "Dreambox Two";
};

&sd_emmc_a {
	sd-uhs-sdr12;
	sd-uhs-sdr25;
	sd-uhs-sdr50;
	sd-uhs-sdr104;
};

```
