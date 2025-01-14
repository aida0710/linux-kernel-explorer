---
sidebar_position: 283
---
# sc7180-trogdor-r1-lte.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7180-trogdor-r1-lte.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Google Trogdor board device tree source
 *
 * Copyright 2020 Google LLC.
 */

#include "sc7180-trogdor-r1.dts"
#include "sc7180-trogdor-lte-sku.dtsi"

/ {
	model = "Google Trogdor (rev1+) with LTE";
	compatible = "google,trogdor-sku0", "qcom,sc7180";
};

```
