---
sidebar_position: 101
---
# mt8186-corsola-rusty-sku196608.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8186-corsola-rusty-sku196608.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Copyright 2022 Google LLC
 */

/dts-v1/;
#include "mt8186-corsola-steelix.dtsi"

/ {
	model = "Google Rusty board";
	compatible = "google,steelix-sku196609", "google,steelix-sku196608",
		     "google,steelix", "mediatek,mt8186";
	chassis-type = "laptop";
};

&gpio_keys {
	status = "disabled";
};

&i2c1 {
	status = "disabled";
};

&touchscreen {
	status = "disabled";
};

```
