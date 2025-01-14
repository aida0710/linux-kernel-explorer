---
sidebar_position: 34
---
# aspeed-bmc-ibm-blueridge-4u.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/aspeed/aspeed-bmc-ibm-blueridge-4u.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
// Copyright 2024 IBM Corp.
/dts-v1/;

#include "aspeed-bmc-ibm-blueridge.dts"

/ {
	model = "Blueridge 4U";
};

&i2c3 {
	power-supply@6a {
		compatible = "ibm,cffps";
		reg = <0x6a>;
	};

	power-supply@6b {
		compatible = "ibm,cffps";
		reg = <0x6b>;
	};
};

```
