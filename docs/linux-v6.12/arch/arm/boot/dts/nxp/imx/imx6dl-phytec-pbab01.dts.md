---
sidebar_position: 66
---
# imx6dl-phytec-pbab01.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6dl-phytec-pbab01.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright 2013 Christian Hemp, Phytec Messtechnik GmbH
 */

/dts-v1/;
#include "imx6dl-phytec-pfla02.dtsi"
#include "imx6qdl-phytec-pbab01.dtsi"

/ {
	model = "Phytec phyFLEX-i.MX6 DualLite/Solo Carrier-Board";
	compatible = "phytec,imx6dl-pbab01", "phytec,imx6dl-pfla02", "fsl,imx6dl";
};

```
