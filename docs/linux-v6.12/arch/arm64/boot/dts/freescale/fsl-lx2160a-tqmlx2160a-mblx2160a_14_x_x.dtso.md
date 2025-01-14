---
sidebar_position: 63
---
# fsl-lx2160a-tqmlx2160a-mblx2160a_14_x_x.dtso

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/fsl-lx2160a-tqmlx2160a-mblx2160a_14_x_x.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright (c) 2020-2023 TQ-Systems GmbH <linux@ew.tq-group.com>,
 * D-82229 Seefeld, Germany.
 * Author: Gregor Herburger
 */

/dts-v1/;
/plugin/;

&dpmac1 {
	managed = "in-band-status";
};

&pcs_mdio1 {
	status = "okay";
};

```
