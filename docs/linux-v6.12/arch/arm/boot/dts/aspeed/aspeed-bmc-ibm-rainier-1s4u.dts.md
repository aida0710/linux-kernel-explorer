---
sidebar_position: 39
---
# aspeed-bmc-ibm-rainier-1s4u.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/aspeed/aspeed-bmc-ibm-rainier-1s4u.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
// Copyright 2021 IBM Corp.
/dts-v1/;

#include "aspeed-bmc-ibm-rainier-4u.dts"

/ {
	model = "Rainier 1S4U";
};

&max {
	/delete-node/ fan3;
	/delete-node/ fan5;
};

```
