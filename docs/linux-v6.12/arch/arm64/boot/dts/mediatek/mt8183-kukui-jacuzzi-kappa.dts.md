---
sidebar_position: 71
---
# mt8183-kukui-jacuzzi-kappa.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-jacuzzi-kappa.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Copyright 2021 Google LLC
 */

/dts-v1/;
#include "mt8183-kukui-jacuzzi.dtsi"
#include "mt8183-kukui-audio-ts3a227e-max98357a.dtsi"

/ {
	model = "Google kappa board";
	chassis-type = "laptop";
	compatible = "google,kappa", "mediatek,mt8183";
};

&mt6358codec {
	mediatek,dmic-mode = <1>; /* one-wire */
};

```
