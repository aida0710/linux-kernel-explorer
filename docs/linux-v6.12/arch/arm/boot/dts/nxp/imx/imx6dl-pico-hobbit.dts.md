---
sidebar_position: 69
---
# imx6dl-pico-hobbit.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6dl-pico-hobbit.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0 OR MIT
//
// Copyright 2018 Technexion Ltd.
//
// Author: Wig Cheng <wig.cheng@technexion.com>
//	   Richard Hu <richard.hu@technexion.com>
//	   Tapani Utriainen <tapani@technexion.com>

/dts-v1/;

#include "imx6dl.dtsi"
#include "imx6qdl-pico-hobbit.dtsi"

/ {
	model = "TechNexion PICO-IMX6 DualLite/Solo Board and Hobbit baseboard";
	compatible = "technexion,imx6dl-pico-hobbit", "fsl,imx6dl";
};

```
