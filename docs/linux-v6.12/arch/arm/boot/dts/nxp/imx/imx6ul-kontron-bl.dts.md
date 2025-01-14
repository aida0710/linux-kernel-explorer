---
sidebar_position: 386
---
# imx6ul-kontron-bl.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ul-kontron-bl.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (C) 2017 exceet electronics GmbH
 * Copyright (C) 2018 Kontron Electronics GmbH
 * Copyright (c) 2019 Krzysztof Kozlowski <krzk@kernel.org>
 */

/dts-v1/;

#include "imx6ul-kontron-sl.dtsi"
#include "imx6ul-kontron-bl-common.dtsi"

/ {
	model = "Kontron BL i.MX6UL (N631X S)";
	compatible = "kontron,bl-imx6ul", "kontron,sl-imx6ul", "fsl,imx6ul";
};

```
