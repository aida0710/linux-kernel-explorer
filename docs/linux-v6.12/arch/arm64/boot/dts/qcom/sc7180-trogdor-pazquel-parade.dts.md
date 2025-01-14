---
sidebar_position: 267
---
# sc7180-trogdor-pazquel-parade.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7180-trogdor-pazquel-parade.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Google Pazquel board device tree source
 *
 * Copyright 2022 Google LLC.
 */

/dts-v1/;

#include "sc7180-trogdor.dtsi"
#include "sc7180-trogdor-parade-ps8640.dtsi"
#include "sc7180-trogdor-pazquel.dtsi"
#include "sc7180-trogdor-rt5682i-sku.dtsi"

/ {
	model = "Google Pazquel (Parade)";
	compatible = "google,pazquel-sku5", "qcom,sc7180";
};

```
