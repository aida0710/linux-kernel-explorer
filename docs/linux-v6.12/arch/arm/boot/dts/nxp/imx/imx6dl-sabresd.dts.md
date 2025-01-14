---
sidebar_position: 83
---
# imx6dl-sabresd.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6dl-sabresd.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
//
// Copyright (C) 2013 Freescale Semiconductor, Inc.

/dts-v1/;

#include "imx6dl.dtsi"
#include "imx6qdl-sabresd.dtsi"

/ {
	model = "Freescale i.MX6 DualLite SABRE Smart Device Board";
	compatible = "fsl,imx6dl-sabresd", "fsl,imx6dl";
};

&ipu1_csi1_from_ipu1_csi1_mux {
	clock-lanes = <0>;
	data-lanes = <1 2>;
};

```
