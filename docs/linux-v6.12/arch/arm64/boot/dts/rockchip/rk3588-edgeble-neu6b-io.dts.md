---
sidebar_position: 187
---
# rk3588-edgeble-neu6b-io.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/rockchip/rk3588-edgeble-neu6b-io.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2023 Edgeble AI Technologies Pvt. Ltd.
 */

/dts-v1/;
#include "rk3588j.dtsi"
#include "rk3588-edgeble-neu6b.dtsi"
#include "rk3588-edgeble-neu6a-io.dtsi"

/ {
	model = "Edgeble Neu6B IO Board";
	compatible = "edgeble,neural-compute-module-6a-io",
		     "edgeble,neural-compute-module-6b", "rockchip,rk3588";
};

```
