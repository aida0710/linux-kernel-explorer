---
sidebar_position: 50
---
# meson-g12b-odroid-n2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/amlogic/meson-g12b-odroid-n2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2019 BayLibre, SAS
 * Author: Neil Armstrong <narmstrong@baylibre.com>
 */

/dts-v1/;

#include "meson-g12b-s922x.dtsi"
#include "meson-g12b-odroid-n2.dtsi"

/ {
	compatible = "hardkernel,odroid-n2", "amlogic,s922x", "amlogic,g12b";
	model = "Hardkernel ODROID-N2";
};

```
