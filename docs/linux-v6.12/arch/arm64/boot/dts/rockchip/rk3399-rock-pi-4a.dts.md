---
sidebar_position: 95
---
# rk3399-rock-pi-4a.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/rockchip/rk3399-rock-pi-4a.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2019 Akash Gajjar <Akash_Gajjar@mentor.com>
 * Copyright (c) 2019 Pragnesh Patel <Pragnesh_Patel@mentor.com>
 */

/dts-v1/;
#include "rk3399.dtsi"
#include "rk3399-rock-pi-4.dtsi"

/ {
	model = "Radxa ROCK Pi 4A";
	compatible = "radxa,rockpi4a", "radxa,rockpi4", "rockchip,rk3399";
};

&spi1 {
	status = "okay";

	flash@0 {
		compatible = "jedec,spi-nor";
		reg = <0>;
		spi-max-frequency = <108000000>;
	};
};

```
