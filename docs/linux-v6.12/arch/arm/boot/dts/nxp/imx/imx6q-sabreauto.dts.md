---
sidebar_position: 201
---
# imx6q-sabreauto.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6q-sabreauto.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0+
//
// Copyright 2012 Freescale Semiconductor, Inc.
// Copyright 2011 Linaro Ltd.

/dts-v1/;

#include "imx6q.dtsi"
#include "imx6qdl-sabreauto.dtsi"

/ {
	model = "Freescale i.MX6 Quad SABRE Automotive Board";
	compatible = "fsl,imx6q-sabreauto", "fsl,imx6q";
};

&sata {
	status = "okay";
};

```
