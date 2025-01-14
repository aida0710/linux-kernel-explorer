---
sidebar_position: 275
---
# imx8mq-librem5-r2.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/freescale/imx8mq-librem5-r2.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
// Copyright (C) 2020 Purism SPC <kernel@puri.sm>
//
// Librem 5 Chestnut

/dts-v1/;

#include "imx8mq-librem5.dtsi"

/ {
	model = "Purism Librem 5r2";
	compatible = "purism,librem5r2", "purism,librem5", "fsl,imx8mq";
};

&accel_gyro {
	mount-matrix = "1",  "0",  "0",
		       "0", "-1",  "0",
		       "0",  "0",  "1";
};

&bq25895 {
	ti,charge-current = <1600000>; /* uA */
};

&proximity {
	proximity-near-level = <50>;
};

```
