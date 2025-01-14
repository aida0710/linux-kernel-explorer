---
sidebar_position: 174
---
# imx6q-kontron-samx6i-ads2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6q-kontron-samx6i-ads2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0 OR X11

/dts-v1/;

#include "imx6q.dtsi"
#include "imx6qdl-kontron-samx6i.dtsi"
#include "imx6qdl-kontron-samx6i-ads2.dtsi"

/ {
	model = "Kontron SMARC-sAMX6i Quad/Dual on SMARC Eval 2.0 carrier";
	compatible = "kontron,imx6q-samx6i-ads2", "kontron,imx6q-samx6i", "fsl,imx6q";
};

```
