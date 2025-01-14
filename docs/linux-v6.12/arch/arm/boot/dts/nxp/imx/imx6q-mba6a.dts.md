---
sidebar_position: 181
---
# imx6q-mba6a.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6q-mba6a.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright 2013 Sascha Hauer, Pengutronix
 *
 * Copyright 2013-2021 TQ-Systems GmbH
 * Author: Markus Niebel <Markus.Niebel@tq-group.com>
 */

/dts-v1/;

#include "imx6q-tqma6a.dtsi"
#include "imx6qdl-mba6.dtsi"
#include "imx6qdl-mba6a.dtsi"
#include "imx6q-mba6.dtsi"

/ {
	model = "TQ TQMa6Q on MBa6x";
	compatible = "tq,imx6q-mba6x-a", "tq,mba6a",
		     "tq,imx6q-tqma6q-a", "fsl,imx6q";
};

```
