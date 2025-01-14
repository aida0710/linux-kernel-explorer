---
sidebar_position: 295
---
# imx8qm-apalis-eval-v1.2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8qm-apalis-eval-v1.2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2024 Toradex
 */

/dts-v1/;

#include "imx8qm-apalis.dtsi"
#include "imx8-apalis-eval-v1.2.dtsi"

/ {
	model = "Toradex Apalis iMX8QM/QP on Apalis Evaluation Board V1.2";
	compatible = "toradex,apalis-imx8-eval-v1.2",
		     "toradex,apalis-imx8",
		     "fsl,imx8qm";
};

```
