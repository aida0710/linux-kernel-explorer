---
sidebar_position: 229
---
# imx8mp-phycore-no-eth.dtso

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mp-phycore-no-eth.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (C) 2024 PHYTEC Messtechnik GmbH
 * Author: Cem Tenruh <c.tenruh@phytec.de>
 */

/dts-v1/;
/plugin/;

&ethphy1 {
	status = "disabled";
};

&fec {
	status = "disabled";
};

```
