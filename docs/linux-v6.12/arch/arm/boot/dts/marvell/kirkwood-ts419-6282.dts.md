---
sidebar_position: 188
---
# kirkwood-ts419-6282.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/marvell/kirkwood-ts419-6282.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0+
/*
 * Device Tree file for QNAP TS41X with 6282 SoC
 *
 * Copyright (C) 2013, Andrew Lunn <andrew@lunn.ch>
 */

/dts-v1/;

#include "kirkwood.dtsi"
#include "kirkwood-6282.dtsi"
#include "kirkwood-ts219.dtsi"
#include "kirkwood-ts419.dtsi"

&ethphy0 { reg = <0>; };
&ethphy1 { reg = <1>; };

&pciec { status = "okay"; };
&pcie1 { status = "okay"; };

```
