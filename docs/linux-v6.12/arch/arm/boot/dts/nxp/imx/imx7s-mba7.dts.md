---
sidebar_position: 530
---
# imx7s-mba7.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx7s-mba7.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0 OR X11
/*
 * Device Tree Source for TQ-Systems TQMa7S board on MBa7 carrier board.
 *
 * Copyright (C) 2016 TQ-Systems GmbH
 * Author: Markus Niebel <Markus.Niebel@tq-group.com>
 * Copyright (C) 2019 Bruno Thomsen <bruno.thomsen@gmail.com>
 */

/dts-v1/;

#include "imx7s-tqma7.dtsi"
#include "imx7-mba7.dtsi"

/ {
	model = "TQ-Systems TQMa7S board on MBa7 carrier board";
	compatible = "tq,imx7s-mba7", "tq,imx7s-tqma7", "fsl,imx7s";
};

```
