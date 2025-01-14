---
sidebar_position: 326
---
# imx6qp-mba6b.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6qp-mba6b.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright 2015-2021 TQ-Systems GmbH
 * Author: Markus Niebel <Markus.Niebel@tq-group.com>
 */
/dts-v1/;

#include <dt-bindings/gpio/gpio.h>
#include "imx6qp-tqma6b.dtsi"
#include "imx6qdl-mba6.dtsi"
#include "imx6qdl-mba6b.dtsi"
#include "imx6q-mba6.dtsi"

/ {
	model = "TQ TQMa6QP on MBa6x";
	compatible = "tq,imx6qp-mba6x-b", "tq,mba6b",
		     "tq,imx6qp-tqma6qp-b", "fsl,imx6qp";
};

```
