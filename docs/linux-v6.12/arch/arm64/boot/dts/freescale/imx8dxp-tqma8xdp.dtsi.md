---
sidebar_position: 106
---
# imx8dxp-tqma8xdp.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8dxp-tqma8xdp.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0-or-later OR X11)
/*
 * Copyright 2018-2023 TQ-Systems GmbH <linux@ew.tq-group.com>,
 * D-82229 Seefeld, Germany.
 * Author: Alexander Stein
 */

#include "imx8dxp.dtsi"
#include "tqma8xx.dtsi"

/ {
	model = "TQ-Systems i.MX8DXP TQMa8XDP";
	compatible = "tq,imx8dxp-tqma8xdp", "fsl,imx8dxp";
};

&pmic_thermal {
	cooling-maps {
		map0 {
			cooling-device =
				<&A35_0 THERMAL_NO_LIMIT THERMAL_NO_LIMIT>,
				<&A35_1 THERMAL_NO_LIMIT THERMAL_NO_LIMIT>;
		};
	};
};

```
