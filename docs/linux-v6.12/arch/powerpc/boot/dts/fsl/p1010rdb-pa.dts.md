---
sidebar_position: 67
---
# p1010rdb-pa.dts

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/boot/dts/fsl/p1010rdb-pa.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * P1010 RDB Device Tree Source
 *
 * Copyright 2011 Freescale Semiconductor Inc.
 */

/include/ "p1010si-pre.dtsi"

/ {
	model = "fsl,P1010RDB";
	compatible = "fsl,P1010RDB";

	/include/ "p1010rdb_32b.dtsi"
};

/include/ "p1010rdb.dtsi"
/include/ "p1010rdb-pa.dtsi"
/include/ "p1010si-post.dtsi"

```
