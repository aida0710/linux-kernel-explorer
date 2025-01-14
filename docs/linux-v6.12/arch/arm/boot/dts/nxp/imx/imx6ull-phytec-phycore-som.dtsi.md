---
sidebar_position: 455
---
# imx6ull-phytec-phycore-som.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ull-phytec-phycore-som.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (C) 2019 PHYTEC Messtechnik GmbH
 * Author: Stefan Riedmueller <s.riedmueller@phytec.de>
 */

#include "imx6ul-phytec-phycore-som.dtsi"

/ {
	model = "PHYTEC phyCORE-i.MX6 ULL";
	compatible = "phytec,imx6ull-pcl063", "fsl,imx6ull";
};

&iomuxc {
	/delete-node/ gpioledssomgrp;
};

&iomuxc_snvs {
	pinctrl_gpioleds_som: gpioledssomgrp {
		fsl,pins = <
			MX6ULL_PAD_SNVS_TAMPER4__GPIO5_IO04	0x0b0b0
		>;
	};
};

```
