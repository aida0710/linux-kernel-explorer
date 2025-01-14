---
sidebar_position: 72
---
# imx8-apalis-eval-v1.1.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8-apalis-eval-v1.1.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2024 Toradex
 */

#include "imx8-apalis-eval.dtsi"

/* Apalis CAN1 */
&flexcan1 {
	status = "okay";
};

/* Apalis CAN2 */
&flexcan2 {
	status = "okay";
};

/* Apalis MMC1 */
&usdhc2 {
	status = "okay";
};

/* Apalis SD1 */
&usdhc3 {
	status = "okay";
};

```
