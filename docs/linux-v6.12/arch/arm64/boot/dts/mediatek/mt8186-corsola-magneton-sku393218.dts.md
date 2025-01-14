---
sidebar_position: 100
---
# mt8186-corsola-magneton-sku393218.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8186-corsola-magneton-sku393218.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Copyright 2022 Google LLC
 */

/dts-v1/;
#include "mt8186-corsola-steelix.dtsi"

/ {
	model = "Google Magneton board";
	compatible = "google,steelix-sku393221", "google,steelix-sku393218",
		     "google,steelix", "mediatek,mt8186";
	chassis-type = "laptop";
};

&gpio_keys {
	status = "disabled";
};

&touchscreen {
	status = "disabled";
};

&usb_c1 {
	status = "disabled";
};

```
