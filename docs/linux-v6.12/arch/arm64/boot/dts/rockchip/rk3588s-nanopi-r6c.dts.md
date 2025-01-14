---
sidebar_position: 218
---
# rk3588s-nanopi-r6c.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/rockchip/rk3588s-nanopi-r6c.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)

/dts-v1/;

#include "rk3588s-nanopi-r6s.dts"

/ {
	model = "FriendlyElec NanoPi R6C";
	compatible = "friendlyarm,nanopi-r6c", "rockchip,rk3588s";
};

&lan2_led {
	label = "user_led";
};

```
