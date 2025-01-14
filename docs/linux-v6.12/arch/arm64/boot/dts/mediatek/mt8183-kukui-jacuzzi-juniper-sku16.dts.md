---
sidebar_position: 69
---
# mt8183-kukui-jacuzzi-juniper-sku16.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-jacuzzi-juniper-sku16.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Copyright 2021 Google LLC
 */

/dts-v1/;
#include "mt8183-kukui-jacuzzi-juniper.dtsi"
#include "mt8183-kukui-audio-ts3a227e-max98357a.dtsi"

/ {
	model = "Google juniper sku16 board";
	chassis-type = "convertible";
	compatible = "google,juniper-sku16", "google,juniper", "mediatek,mt8183";
};


```
