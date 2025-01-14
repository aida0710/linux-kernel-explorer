---
sidebar_position: 338
---
# imx6qp-vicutp.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6qp-vicutp.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright (c) 2014 Protonic Holland
 */

/dts-v1/;
#include "imx6qp.dtsi"
#include "imx6qdl-vicut1.dtsi"
#include "imx6qdl-vicut1-12inch.dtsi"

/ {
	model = "Kverneland UT1P Board";
	compatible = "kvg,vicutp", "fsl,imx6qp";
};

```
