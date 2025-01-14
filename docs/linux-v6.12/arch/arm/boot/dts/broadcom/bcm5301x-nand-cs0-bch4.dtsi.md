---
sidebar_position: 70
---
# bcm5301x-nand-cs0-bch4.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/broadcom/bcm5301x-nand-cs0-bch4.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2016 Luxul Inc.
 */

#include "bcm5301x-nand-cs0.dtsi"

&nandcs {
	nand-ecc-algo = "bch";
	nand-ecc-strength = <4>;
	nand-ecc-step-size = <512>;
};

```
