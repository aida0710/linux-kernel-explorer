---
sidebar_position: 300
---
# imx8qm-apalis-v1.1-ixora-v1.1.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8qm-apalis-v1.1-ixora-v1.1.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2022 Toradex
 */

/dts-v1/;

#include "imx8qm-apalis-v1.1.dtsi"
#include "imx8-apalis-ixora-v1.1.dtsi"

/ {
	model = "Toradex Apalis iMX8QM V1.1 on Apalis Ixora V1.1 Carrier Board";
	compatible = "toradex,apalis-imx8-v1.1-ixora-v1.1",
		     "toradex,apalis-imx8-v1.1",
		     "fsl,imx8qm";
};

```
