---
sidebar_position: 238
---
# sc7180-trogdor-homestar-r2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7180-trogdor-homestar-r2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Google Homestar board device tree source
 *
 * Copyright 2021 Google LLC.
 */

/dts-v1/;

#include "sc7180-trogdor.dtsi"
#include "sc7180-trogdor-ti-sn65dsi86.dtsi"
#include "sc7180-trogdor-homestar.dtsi"

/ {
	model = "Google Homestar (rev2)";
	compatible = "google,homestar-rev2","google,homestar-rev23", "qcom,sc7180";
};

&panel {
	/delete-property/hpd-gpios;
	no-hpd;
};

```
