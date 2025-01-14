---
sidebar_position: 86
---
# imx6dl-skov-revc-lt2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6dl-skov-revc-lt2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
//
// Copyright (C) 2020 Pengutronix, Ulrich Oelmann <kernel@pengutronix.de>

/dts-v1/;
#include "imx6dl.dtsi"
#include "imx6qdl-skov-cpu.dtsi"
#include "imx6qdl-skov-cpu-revc.dtsi"
#include "imx6qdl-skov-revc-lt2.dtsi"

/ {
	model = "SKOV IMX6 CPU SoloCore";
	compatible = "skov,imx6dl-skov-revc-lt2", "fsl,imx6dl";
};

```
