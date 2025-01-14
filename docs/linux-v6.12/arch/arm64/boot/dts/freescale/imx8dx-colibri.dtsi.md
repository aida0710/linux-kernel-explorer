---
sidebar_position: 97
---
# imx8dx-colibri.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8dx-colibri.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2018-2021 Toradex
 */

#include "imx8dx.dtsi"
#include "imx8x-colibri.dtsi"

/ {
	model = "Toradex Colibri iMX8DX Module";
};

&thermal_zones {
	pmic-thermal {
		cooling-maps {
			map0 {
				cooling-device = <&A35_0 THERMAL_NO_LIMIT THERMAL_NO_LIMIT>,
						 <&A35_1 THERMAL_NO_LIMIT THERMAL_NO_LIMIT>;
			};
		};
	};
};

```
