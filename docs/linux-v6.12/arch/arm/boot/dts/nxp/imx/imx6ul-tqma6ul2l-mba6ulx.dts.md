---
sidebar_position: 411
---
# imx6ul-tqma6ul2l-mba6ulx.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ul-tqma6ul2l-mba6ulx.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0-or-later OR MIT)
/*
 * Copyright 2018-2022 TQ Systems GmbH
 * Author: Markus Niebel <Markus.Niebel@tq-group.com>
 */

/dts-v1/;

#include "imx6ul-tqma6ul2l.dtsi"
#include "mba6ulx.dtsi"

/ {
	model = "TQ Systems TQMa6UL2L SoM on MBa6ULx board";
	compatible = "tq,imx6ul-tqma6ul2l-mba6ulx", "tq,imx6ul-tqma6ul2l", "fsl,imx6ul";
};

```
