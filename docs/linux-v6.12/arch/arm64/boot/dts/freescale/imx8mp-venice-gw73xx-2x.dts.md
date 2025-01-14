---
sidebar_position: 247
---
# imx8mp-venice-gw73xx-2x.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mp-venice-gw73xx-2x.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright 2023 Gateworks Corporation
 */

/dts-v1/;

#include "imx8mp.dtsi"
#include "imx8mp-venice-gw702x.dtsi"
#include "imx8mp-venice-gw73xx.dtsi"

/ {
	model = "Gateworks Venice GW73xx-2x i.MX8MP Development Kit";
	compatible = "gateworks,imx8mp-gw73xx-2x", "fsl,imx8mp";

	chosen {
		stdout-path = &uart2;
	};
};

```
