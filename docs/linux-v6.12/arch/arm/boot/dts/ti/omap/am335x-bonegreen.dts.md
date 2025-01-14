---
sidebar_position: 35
---
# am335x-bonegreen.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/am335x-bonegreen.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2012 Texas Instruments Incorporated - https://www.ti.com/
 */
/dts-v1/;

#include "am33xx.dtsi"
#include "am335x-bone-common.dtsi"
#include "am335x-bonegreen-common.dtsi"

/ {
	model = "TI AM335x BeagleBone Green";
	compatible = "ti,am335x-bone-green", "ti,am335x-bone-black", "ti,am335x-bone", "ti,am33xx";
};

```
