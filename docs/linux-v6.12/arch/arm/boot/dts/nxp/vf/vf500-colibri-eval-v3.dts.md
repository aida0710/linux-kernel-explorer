---
sidebar_position: 4
---
# vf500-colibri-eval-v3.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/vf/vf500-colibri-eval-v3.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0+ OR MIT
/*
 * Copyright 2014-2020 Toradex
 */

/dts-v1/;
#include "vf500-colibri.dtsi"
#include "vf-colibri-eval-v3.dtsi"

/ {
	model = "Toradex Colibri VF50 on Colibri Evaluation Board";
	compatible = "toradex,vf500-colibri_vf50-on-eval", "toradex,vf500-colibri_vf50", "fsl,vf500";
};

&touchscreen {
	vf50-ts-min-pressure = <200>;
	status = "okay";
};

```
