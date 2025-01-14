---
sidebar_position: 388
---
# imx6ul-kontron-sl.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ul-kontron-sl.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (C) 2017 exceet electronics GmbH
 * Copyright (C) 2018 Kontron Electronics GmbH
 * Copyright (c) 2019 Krzysztof Kozlowski <krzk@kernel.org>
 */

#include "imx6ul.dtsi"
#include "imx6ul-kontron-sl-common.dtsi"

/ {
	model = "Kontron SL i.MX6UL (N631X SOM)";
	compatible = "kontron,sl-imx6ul", "fsl,imx6ul";
};

```
