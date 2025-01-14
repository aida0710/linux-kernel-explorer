---
sidebar_position: 277
---
# sc7180-trogdor-pompom-r3-lte.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7180-trogdor-pompom-r3-lte.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Google Pompom board device tree source
 *
 * Copyright 2021 Google LLC.
 */

#include "sc7180-trogdor-pompom-r3.dts"
#include "sc7180-trogdor-lte-sku.dtsi"

/ {
	model = "Google Pompom (rev3+) with LTE";
	compatible = "google,pompom-sku0", "qcom,sc7180";
};

```
