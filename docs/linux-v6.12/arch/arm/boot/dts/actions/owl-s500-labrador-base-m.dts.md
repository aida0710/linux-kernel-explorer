---
sidebar_position: 5
---
# owl-s500-labrador-base-m.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/actions/owl-s500-labrador-base-m.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Caninos Labrador Base Board
 *
 * Copyright (c) 2019-2020 Matheus Castello
 */

/dts-v1/;

#include "owl-s500-labrador-v2.dtsi"

/ {
	model = "Caninos Labrador Core v2 on Labrador Base-M v1";
	compatible = "caninos,labrador-base-m",
		     "caninos,labrador-v2", "actions,s500";

	aliases {
		serial3 = &uart3;
	};

	chosen {
		stdout-path = "serial3:115200n8";
	};
};

&uart3 {
	status = "okay";
};

```
