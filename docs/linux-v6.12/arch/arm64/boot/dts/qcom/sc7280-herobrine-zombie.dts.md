---
sidebar_position: 318
---
# sc7280-herobrine-zombie.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7280-herobrine-zombie.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Google Zombie board device tree source
 *
 * Copyright 2022 Google LLC.
 */

/dts-v1/;

#include "sc7280-herobrine-zombie.dtsi"
#include "sc7280-herobrine-wifi-sku.dtsi"

/ {
	model = "Google Zombie";
	compatible = "google,zombie", "qcom,sc7280";
};

```
