---
sidebar_position: 100
---
# kirkwood-db-88f6282.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/marvell/kirkwood-db-88f6282.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Marvell DB-88F6282-BP Development Board Setup
 *
 * Saeed Bishara <saeed@marvell.com>
 * Thomas Petazzoni <thomas.petazzoni@free-electrons.com>
 *
 */

/dts-v1/;

#include "kirkwood-db.dtsi"
#include "kirkwood-6282.dtsi"

/ {
	model = "Marvell DB-88F6282-BP Development Board";
	compatible = "marvell,db-88f6282-bp", "marvell,kirkwood-88f6282", "marvell,kirkwood";
};

&pciec {
	status = "okay";
};

&pcie0 {
	status = "okay";
};

&pcie1 {
	status = "okay";
};

```
