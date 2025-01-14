---
sidebar_position: 78
---
# mt8183-kukui-jacuzzi-willow-sku1.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-jacuzzi-willow-sku1.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Copyright 2021 Google LLC
 */

/dts-v1/;
#include "mt8183-kukui-jacuzzi-willow.dtsi"
#include "mt8183-kukui-audio-ts3a227e-max98357a.dtsi"

/ {
	model = "Google willow board sku1";
	chassis-type = "laptop";
	compatible = "google,willow-sku1", "google,willow", "mediatek,mt8183";
};

```
