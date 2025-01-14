---
sidebar_position: 109
---
# rk3399pro-rock-pi-n10.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/rockchip/rk3399pro-rock-pi-n10.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2019 Fuzhou Rockchip Electronics Co., Ltd
 * Copyright (c) 2019 Radxa Limited
 * Copyright (c) 2019 Amarula Solutions(India)
 */

/dts-v1/;
#include "rk3399.dtsi"
#include <arm/rockchip/rockchip-radxa-dalang-carrier.dtsi>
#include "rk3399pro-vmarc-som.dtsi"

/ {
	model = "Radxa ROCK Pi N10";
	compatible = "radxa,rockpi-n10", "vamrs,rk3399pro-vmarc-som",
		     "rockchip,rk3399pro";

	chosen {
		stdout-path = "serial2:1500000n8";
	};
};

```
