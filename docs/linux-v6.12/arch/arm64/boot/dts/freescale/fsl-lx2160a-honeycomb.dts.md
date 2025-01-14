---
sidebar_position: 58
---
# fsl-lx2160a-honeycomb.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/fsl-lx2160a-honeycomb.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
//
// Device Tree file for LX2160A Honeycomb board
//
// Copyright 2019 SolidRun Ltd.

/dts-v1/;

#include "fsl-lx2160a-clearfog-itx.dtsi"

/ {
	model = "SolidRun LX2160A Honeycomb";
	compatible = "solidrun,honeycomb",
		"solidrun,lx2160a-cex7", "fsl,lx2160a";
};

```
