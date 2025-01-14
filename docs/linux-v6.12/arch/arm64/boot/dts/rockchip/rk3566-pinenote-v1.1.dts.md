---
sidebar_position: 128
---
# rk3566-pinenote-v1.1.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/rockchip/rk3566-pinenote-v1.1.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)

/dts-v1/;

#include "rk3566-pinenote.dtsi"

/ {
	model = "Pine64 PineNote v1.1";
	compatible = "pine64,pinenote-v1.1", "pine64,pinenote", "rockchip,rk3566";
};

&pmu_io_domains {
	vccio7-supply = <&vcc_1v8>;
};

&spk_amp {
	VCC-supply = <&dcdc_boost>;
};

```
