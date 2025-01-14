---
sidebar_position: 105
---
# imx8dxp-tqma8xdp-mba8xx.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8dxp-tqma8xdp-mba8xx.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0-or-later OR X11)
/*
 * Copyright 2018-2023 TQ-Systems GmbH <linux@ew.tq-group.com>,
 * D-82229 Seefeld, Germany.
 * Author: Alexander Stein
 */

/dts-v1/;

#include "imx8dxp-tqma8xdp.dtsi"
#include "mba8xx.dtsi"

/ {
	model = "TQ-Systems i.MX8DXP TQMa8XDP on MBa8Xx";
	compatible = "tq,imx8dxp-tqma8xdp-mba8xx", "tq,imx8dxp-tqma8xdp", "fsl,imx8dxp";
};

```
