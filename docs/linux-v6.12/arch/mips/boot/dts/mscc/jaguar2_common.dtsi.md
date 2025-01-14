---
sidebar_position: 2
---
# jaguar2_common.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/mscc/jaguar2_common.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2020 Microsemi Corporation
 */

#include "jaguar2.dtsi"

/ {
	chosen {
		stdout-path = "serial0:115200n8";
	};
};

&uart0 {
	status = "okay";
};

&uart2 {
	status = "okay";
};

&i2c0 {
	status = "okay";
	i2c-sda-hold-time-ns = <300>;
};

```
