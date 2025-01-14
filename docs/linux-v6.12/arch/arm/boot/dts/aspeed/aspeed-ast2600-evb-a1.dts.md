---
sidebar_position: 2
---
# aspeed-ast2600-evb-a1.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/aspeed/aspeed-ast2600-evb-a1.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
// Copyright 2021 IBM Corp.

#include "aspeed-ast2600-evb.dts"

/ {
	model = "AST2600 A1 EVB";
	compatible = "aspeed,ast2600-evb-a1", "aspeed,ast2600-evb", "aspeed,ast2600";

	/delete-node/regulator-vcc-sdhci0;
	/delete-node/regulator-vcc-sdhci1;
	/delete-node/regulator-vccq-sdhci0;
	/delete-node/regulator-vccq-sdhci1;
};

/delete-node/ &sdc;

```
