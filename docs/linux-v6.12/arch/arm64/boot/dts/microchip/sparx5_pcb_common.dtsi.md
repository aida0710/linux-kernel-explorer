---
sidebar_position: 11
---
# sparx5_pcb_common.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/microchip/sparx5_pcb_common.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2020 Microchip Technology Inc. and its subsidiaries.
 */

/dts-v1/;
#include "sparx5.dtsi"

&psci {
	status = "disabled";
};

&cpu0 {
	enable-method = "spin-table";
};

&cpu1 {
	enable-method = "spin-table";
};

&uart0 {
	status = "okay";
};

&uart1 {
	status = "okay";
};

&i2c0 {
	status = "okay";
};

```
