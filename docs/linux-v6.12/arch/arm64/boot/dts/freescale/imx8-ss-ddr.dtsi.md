---
sidebar_position: 83
---
# imx8-ss-ddr.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8-ss-ddr.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0+
/*
 * Copyright 2019-2020 NXP
 *	Dong Aisheng <aisheng.dong@nxp.com>
 */

ddr_subsys: bus@5c000000 {
	compatible = "simple-bus";
	#address-cells = <1>;
	#size-cells = <1>;
	ranges = <0x5c000000 0x0 0x5c000000 0x1000000>;

	ddr_pmu0: ddr-pmu@5c020000 {
		compatible = "fsl,imx8-ddr-pmu";
		reg = <0x5c020000 0x10000>;
		interrupts = <GIC_SPI 131 IRQ_TYPE_LEVEL_HIGH>;
	};
};

```
