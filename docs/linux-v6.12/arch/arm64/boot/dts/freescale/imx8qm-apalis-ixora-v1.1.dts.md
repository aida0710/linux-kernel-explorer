---
sidebar_position: 297
---
# imx8qm-apalis-ixora-v1.1.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8qm-apalis-ixora-v1.1.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2022 Toradex
 */

/dts-v1/;

#include "imx8qm-apalis.dtsi"
#include "imx8-apalis-ixora-v1.1.dtsi"

/ {
	model = "Toradex Apalis iMX8QM/QP on Apalis Ixora V1.1 Carrier Board";
	compatible = "toradex,apalis-imx8-ixora-v1.1",
		     "toradex,apalis-imx8",
		     "fsl,imx8qm";
};

```
