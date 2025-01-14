---
sidebar_position: 55
---
# mt8183-kukui-audio-max98357a.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-audio-max98357a.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Google Kukui (and derivatives) audio fragment for max98357a.
 *
 * Copyright 2020 Google LLC.
 */

/ {
	max98357a: max98357a {
		compatible = "maxim,max98357a";
		sdmode-gpios = <&pio 175 0>;
	};
};

```
