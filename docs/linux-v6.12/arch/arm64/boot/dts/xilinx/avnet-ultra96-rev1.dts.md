---
sidebar_position: 1
---
# avnet-ultra96-rev1.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/xilinx/avnet-ultra96-rev1.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0+
/*
 * dts file for Avnet Ultra96 rev1
 *
 * (C) Copyright 2018, Xilinx, Inc.
 *
 * Michal Simek <michal.simek@amd.com>
 */

/dts-v1/;

#include "zynqmp-zcu100-revC.dts"

/ {
	model = "Avnet Ultra96 Rev1";
	compatible = "avnet,ultra96-rev1", "avnet,ultra96",
		     "xlnx,zynqmp-zcu100-revC", "xlnx,zynqmp-zcu100",
		     "xlnx,zynqmp";
};

```
