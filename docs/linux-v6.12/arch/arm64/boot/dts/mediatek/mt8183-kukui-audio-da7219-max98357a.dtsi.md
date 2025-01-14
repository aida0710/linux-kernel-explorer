---
sidebar_position: 52
---
# mt8183-kukui-audio-da7219-max98357a.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-audio-da7219-max98357a.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Google Kukui (and derivatives) da7219-max98357a sound card.
 *
 * Copyright 2019 Google LLC.
 */

#include "mt8183-kukui-audio-da7219.dtsi"
#include "mt8183-kukui-audio-max98357a.dtsi"

&sound {
	compatible = "mediatek,mt8183_da7219_max98357";
};

```
