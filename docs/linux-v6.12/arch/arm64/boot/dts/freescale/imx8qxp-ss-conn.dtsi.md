---
sidebar_position: 321
---
# imx8qxp-ss-conn.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8qxp-ss-conn.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0+
/*
 * Copyright 2018-2020 NXP
 *	Dong Aisheng <aisheng.dong@nxp.com>
 */

&usdhc1 {
	compatible = "fsl,imx8qxp-usdhc", "fsl,imx7d-usdhc";
};

&usdhc2 {
	compatible = "fsl,imx8qxp-usdhc", "fsl,imx7d-usdhc";
};

&usdhc3 {
	compatible = "fsl,imx8qxp-usdhc", "fsl,imx7d-usdhc";
};

&fec1 {
	compatible = "fsl,imx8qxp-fec", "fsl,imx8qm-fec", "fsl,imx6sx-fec";
};

&fec2 {
	compatible = "fsl,imx8qxp-fec", "fsl,imx8qm-fec", "fsl,imx6sx-fec";
};

```
