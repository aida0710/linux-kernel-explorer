---
sidebar_position: 7
---
# luton_pcb091.dts

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/mscc/luton_pcb091.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2020 Microsemi Corporation
 */

/dts-v1/;

#include "luton.dtsi"

/ {
	model = "Luton10 PCB091 Reference Board";
	compatible = "mscc,luton-pcb091", "mscc,luton";

	aliases {
		serial0 = &uart0;
	};

	chosen {
		stdout-path = "serial0:115200n8";
	};
};

&uart0 {
	status = "okay";
};

&i2c0 {
	status = "okay";
	i2c-sda-hold-time-ns = <300>;
};

```
