---
sidebar_position: 113
---
# imx8mm-emcon-avari.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mm-emcon-avari.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
//
// Copyright (c) 2021 emtrion GmbH
// Author: Frank Erdrich <frank.erdrich@emtrion.com>
//

/dts-v1/;

#include "imx8mm-emcon.dtsi"
#include "imx8mm-emcon-avari.dtsi"

/ {
	model = "emtrion SoM emCON-MX8M mini on Avari";
	compatible = "emtrion,emcon-mx8mm-avari", "fsl,imx8mm";
};

&lvds_backlight {
	status = "okay";
};

&pwm1 {
	status = "okay";
};

```
