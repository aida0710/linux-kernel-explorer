---
sidebar_position: 69
---
# bcm5301x-nand-cs0-bch1.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/broadcom/bcm5301x-nand-cs0-bch1.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Broadcom Northstar NAND.
 *
 * Copyright (C) 2016 Rafał Miłecki <rafal.milecki@gmail.com>
 */

#include "bcm5301x-nand-cs0.dtsi"

&nandcs {
	nand-ecc-algo = "bch";
	nand-ecc-strength = <1>;
	nand-ecc-step-size = <512>;
};

```
