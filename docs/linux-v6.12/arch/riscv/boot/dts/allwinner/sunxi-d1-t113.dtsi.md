---
sidebar_position: 16
---
# sunxi-d1-t113.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/riscv/boot/dts/allwinner/sunxi-d1-t113.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
// Copyright (C) 2021-2022 Samuel Holland <samuel@sholland.org>

/ {
	soc {
		dsp_wdt: watchdog@1700400 {
			compatible = "allwinner,sun20i-d1-wdt";
			reg = <0x1700400 0x20>;
			interrupts = <SOC_PERIPHERAL_IRQ(122) IRQ_TYPE_LEVEL_HIGH>;
			clocks = <&dcxo>, <&rtc CLK_OSC32K>;
			clock-names = "hosc", "losc";
			status = "reserved";
		};
	};
};

```
