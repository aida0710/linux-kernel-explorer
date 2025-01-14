---
sidebar_position: 276
---
# imx8mq-librem5-r3.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mq-librem5-r3.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
// Copyright (C) 2021 Purism SPC <kernel@puri.sm>

/dts-v1/;

#include "imx8mq-librem5-r3.dtsi"

&a53_opp_table {
	opp-1000000000 {
		opp-microvolt = <950000>;
	};
};

&buck3_reg {
	regulator-always-on;
};

```
