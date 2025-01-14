---
sidebar_position: 67
---
# mt8183-kukui-jacuzzi-fennel14-sku2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-jacuzzi-fennel14-sku2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Copyright 2021 Google LLC
 */

/dts-v1/;
#include "mt8183-kukui-jacuzzi-fennel.dtsi"
#include "mt8183-kukui-audio-ts3a227e-rt1015p.dtsi"

/ {
	model = "Google fennel14 sku2 board";
	chassis-type = "laptop";
	compatible = "google,fennel-sku2", "google,fennel", "mediatek,mt8183";
};

&qca_wifi {
	qcom,ath10k-calibration-variant = "GO_FENNEL14";
};

```
