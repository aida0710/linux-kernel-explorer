---
sidebar_position: 53
---
# mt8183-kukui-audio-da7219-rt1015p.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-audio-da7219-rt1015p.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Google Kukui (and derivatives) da7219-rt1015p sound card.
 *
 * Copyright 2020 Google LLC.
 */

#include "mt8183-kukui-audio-da7219.dtsi"
#include "mt8183-kukui-audio-rt1015p.dtsi"

&sound {
	compatible = "mediatek,mt8183_da7219_rt1015p";
};

```
