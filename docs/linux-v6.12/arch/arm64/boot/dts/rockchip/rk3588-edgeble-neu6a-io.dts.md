---
sidebar_position: 183
---
# rk3588-edgeble-neu6a-io.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/rockchip/rk3588-edgeble-neu6a-io.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2022 Edgeble AI Technologies Pvt. Ltd.
 */

/dts-v1/;
#include "rk3588.dtsi"
#include "rk3588-edgeble-neu6a.dtsi"
#include "rk3588-edgeble-neu6a-io.dtsi"

/ {
	model = "Edgeble Neu6A IO Board";
	compatible = "edgeble,neural-compute-module-6a-io",
		     "edgeble,neural-compute-module-6a", "rockchip,rk3588";
};

```
