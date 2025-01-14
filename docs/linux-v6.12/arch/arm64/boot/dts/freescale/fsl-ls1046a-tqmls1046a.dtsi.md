---
sidebar_position: 37
---
# fsl-ls1046a-tqmls1046a.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/fsl-ls1046a-tqmls1046a.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0-or-later OR MIT)
/*
 * Copyright (c) 2018-2023 TQ-Systems GmbH <linux@ew.tq-group.com>,
 * D-82229 Seefeld, Germany.
 * Author: Gregor Herburger, Timo Herbrecher
 *
 * Device Tree Include file for LS1046A based SoM of TQ
 */

#include "fsl-ls1046a.dtsi"
#include "tqmls10xxa.dtsi"

&qspi {
	num-cs = <2>;
	status = "okay";

	qflash0: flash@0 {
		compatible = "jedec,spi-nor";
		reg = <0>;
		#address-cells = <1>;
		#size-cells = <1>;
		spi-max-frequency = <62500000>;
		spi-rx-bus-width = <4>;
		spi-tx-bus-width = <4>;

		partitions {
			compatible = "fixed-partitions";
			#address-cells = <1>;
			#size-cells = <1>;
		};
	};

	qflash1: flash@1 {
		compatible = "jedec,spi-nor";
		reg = <1>;
		#address-cells = <1>;
		#size-cells = <1>;
		spi-max-frequency = <62500000>;
		spi-rx-bus-width = <4>;
		spi-tx-bus-width = <4>;
	};
};

```
