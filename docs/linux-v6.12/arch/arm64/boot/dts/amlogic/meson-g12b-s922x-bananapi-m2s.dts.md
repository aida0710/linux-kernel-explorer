---
sidebar_position: 55
---
# meson-g12b-s922x-bananapi-m2s.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/amlogic/meson-g12b-s922x-bananapi-m2s.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2023 Christian Hewitt <christianshewitt@gmail.com>
 */

/dts-v1/;

#include "meson-g12b-s922x.dtsi"
#include "meson-g12b-bananapi.dtsi"

/ {
	compatible = "bananapi,bpi-m2s", "amlogic,s922x", "amlogic,g12b";
	model = "BananaPi M2S";
};

```
