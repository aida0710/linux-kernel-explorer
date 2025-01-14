---
sidebar_position: 46
---
# mt8173-elm.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8173-elm.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright 2016 MediaTek Inc.
 */

/dts-v1/;
#include "mt8173-elm.dtsi"

/ {
	model = "Google Elm";
	chassis-type = "laptop";
	compatible = "google,elm-rev8", "google,elm-rev7", "google,elm-rev6",
		     "google,elm-rev5", "google,elm-rev4", "google,elm-rev3",
		     "google,elm", "mediatek,mt8173";
};

```
