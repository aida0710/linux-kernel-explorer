---
sidebar_position: 302
---
# sc7280-herobrine-evoker-lte.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7280-herobrine-evoker-lte.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Google Evoker board device tree source
 *
 * Copyright 2022 Google LLC.
 */

/dts-v1/;

#include "sc7280-herobrine-evoker.dtsi"
#include "sc7280-herobrine-lte-sku.dtsi"

/ {
	model = "Google Evoker with LTE";
	compatible = "google,evoker-sku512", "qcom,sc7280";
};

```
