---
sidebar_position: 163
---
# pq3-power.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/boot/dts/fsl/pq3-power.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+)
/*
 * Copyright 2024 NXP
 */

power@e0070 {
	compatible = "fsl,mpc8548-pmc";
	reg = <0xe0070 0x20>;

	etsec1_clk: soc-clk@24 {
		fsl,pmcdr-mask = <0x00000080>;
	};
	etsec2_clk: soc-clk@25 {
		fsl,pmcdr-mask = <0x00000040>;
	};
	etsec3_clk: soc-clk@26 {
		fsl,pmcdr-mask = <0x00000020>;
	};
};

```
