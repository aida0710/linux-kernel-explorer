---
sidebar_position: 271
---
# sc7180-trogdor-pazquel360-wifi.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7180-trogdor-pazquel360-wifi.dts`

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
#include "sc7180-trogdor-pazquel360.dtsi"

/ {
	model = "Google Pazquel (Parade,WIFI-only)";
	compatible = "google,pazquel-sku21", "qcom,sc7180";
};

```
