---
sidebar_position: 56
---
# mt8183-kukui-audio-rt1015p.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-audio-rt1015p.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Google Kukui (and derivatives) audio fragment for rt1015p.
 *
 * Copyright 2020 Google LLC.
 */

/ {
	rt1015p: rt1015p {
		compatible = "realtek,rt1015p";
		sdb-gpios = <&pio 175 0>;
	};
};

```
