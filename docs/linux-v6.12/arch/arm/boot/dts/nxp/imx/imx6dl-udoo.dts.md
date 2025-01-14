---
sidebar_position: 104
---
# imx6dl-udoo.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6dl-udoo.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright 2013 Freescale Semiconductor, Inc.
 *
 * Author: Fabio Estevam <fabio.estevam@freescale.com>
 */
/dts-v1/;
#include "imx6dl.dtsi"
#include "imx6qdl-udoo.dtsi"

/ {
	model = "Udoo i.MX6 Dual-lite Board";
	compatible = "udoo,imx6dl-udoo", "fsl,imx6dl";
};

```
