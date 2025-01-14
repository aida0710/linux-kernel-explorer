---
sidebar_position: 107
---
# imx8dxp.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8dxp.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0+
/*
 * Copyright (C) 2016 Freescale Semiconductor, Inc.
 * Copyright 2017-2019 NXP
 */

/dts-v1/;

#include "imx8qxp.dtsi"

/delete-node/ &A35_2;
/delete-node/ &A35_3;

&thermal_zones {
	cpu0-thermal {
		cooling-maps {
			map0 {
				cooling-device =
				<&A35_0 THERMAL_NO_LIMIT THERMAL_NO_LIMIT>,
				<&A35_1 THERMAL_NO_LIMIT THERMAL_NO_LIMIT>;
			};
		};
	};
};

```
