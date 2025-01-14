---
sidebar_position: 77
---
# mt8183-kukui-jacuzzi-willow-sku0.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-jacuzzi-willow-sku0.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Copyright 2021 Google LLC
 */

/dts-v1/;
#include "mt8183-kukui-jacuzzi-willow.dtsi"
#include "mt8183-kukui-audio-da7219-max98357a.dtsi"

/ {
	model = "Google willow board sku0";
	chassis-type = "laptop";
	compatible = "google,willow-sku0", "google,willow", "mediatek,mt8183";
};


```
