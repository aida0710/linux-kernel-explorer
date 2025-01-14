---
sidebar_position: 461
---
# imx6ull-phytec-segin-peb-wlbt-05.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ull-phytec-segin-peb-wlbt-05.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (C) 2021 PHYTEC Messtechnik GmbH
 * Author: Yunus Bas <y.bas@phytec.de>
 */

#include "imx6ul-phytec-segin-peb-wlbt-05.dtsi"

&iomuxc {
	/delete-node/ wlgrp;
};

&iomuxc_snvs {
	pinctrl_wl: wlgrp {
		fsl,pins = <
			MX6ULL_PAD_SNVS_TAMPER9__GPIO5_IO09	0x3031
		>;
	};
};

```
