---
sidebar_position: 62
---
# fsl-lx2160a-tqmlx2160a-mblx2160a_12_x_x.dtso

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/fsl-lx2160a-tqmlx2160a-mblx2160a_12_x_x.dtso`

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

&dpmac9 {
	phy-handle = <&dp83867_2_1>;
	phy-connection-type = "sgmii";
	managed = "in-band-status";
};

&dpmac10 {
	phy-handle = <&dp83867_2_2>;
	phy-connection-type = "sgmii";
	managed = "in-band-status";
};

&pcs_mdio9 {
	status = "okay";
};

&pcs_mdio10 {
	status = "okay";
};

```
