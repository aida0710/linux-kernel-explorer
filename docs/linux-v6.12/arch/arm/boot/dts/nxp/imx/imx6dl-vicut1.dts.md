---
sidebar_position: 106
---
# imx6dl-vicut1.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6dl-vicut1.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright (c) 2014 Protonic Holland
 */

/dts-v1/;
#include "imx6dl.dtsi"
#include "imx6qdl-vicut1.dtsi"
#include "imx6qdl-vicut1-12inch.dtsi"

/ {
	model = "Kverneland UT1 Board";
	compatible = "kvg,vicut1", "fsl,imx6dl";
};

```
