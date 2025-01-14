---
sidebar_position: 172
---
# imx6q-icore-rqs.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6q-icore-rqs.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (C) 2015 Amarula Solutions B.V.
 * Copyright (C) 2015 Engicam S.r.l.
 */

/dts-v1/;

#include "imx6q.dtsi"
#include "imx6qdl-icore-rqs.dtsi"

/ {
	model = "Engicam i.CoreM6 Quad/Dual RQS Starter Kit";
	compatible = "engicam,imx6-icore-rqs", "fsl,imx6q";
};

&sata {
	status = "okay";
};

```
