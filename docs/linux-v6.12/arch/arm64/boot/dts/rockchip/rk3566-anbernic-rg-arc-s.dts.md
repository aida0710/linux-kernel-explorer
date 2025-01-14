---
sidebar_position: 112
---
# rk3566-anbernic-rg-arc-s.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/rockchip/rk3566-anbernic-rg-arc-s.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)

/dts-v1/;

#include <dt-bindings/gpio/gpio.h>
#include <dt-bindings/input/linux-event-codes.h>
#include <dt-bindings/pinctrl/rockchip.h>
#include "rk3566-anbernic-rg-arc.dtsi"

/ {
	model = "Anbernic RG ARC-S";
	compatible = "anbernic,rg-arc-s", "rockchip,rk3566";

	aliases {
		mmc1 = &sdmmc0;
		mmc2 = &sdmmc1;
		mmc3 = &sdmmc2;
	};
};

```
