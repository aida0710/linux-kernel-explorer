---
sidebar_position: 260
---
# t1040rdb-rev-a.dts

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/boot/dts/fsl/t1040rdb-rev-a.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * T1040RDB-REV-A Device Tree Source
 *
 * Copyright 2014 - 2015 Freescale Semiconductor Inc.
 *
 */

#include "t1040rdb.dts"

/ {
	model = "fsl,T1040RDB-REV-A";
};

&seville_port0 {
	label = "ETH5";
};

&seville_port2 {
	label = "ETH7";
};

&seville_port4 {
	label = "ETH9";
};

&seville_port6 {
	label = "ETH11";
};

```
