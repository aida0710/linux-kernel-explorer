---
sidebar_position: 72
---
# mt8183-kukui-jacuzzi-kenzo.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-jacuzzi-kenzo.dts`

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
	model = "Google kenzo sku17 board";
	chassis-type = "laptop";
	compatible = "google,juniper-sku17", "google,juniper", "mediatek,mt8183";
};

```
