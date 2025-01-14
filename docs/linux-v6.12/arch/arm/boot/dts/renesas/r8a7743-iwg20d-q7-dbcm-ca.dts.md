---
sidebar_position: 24
---
# r8a7743-iwg20d-q7-dbcm-ca.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/renesas/r8a7743-iwg20d-q7-dbcm-ca.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Device Tree Source for the iWave-RZ/G1M Qseven board + camera daughter board
 *
 * Copyright (C) 2017 Renesas Electronics Corp.
 */

/dts-v1/;
#include "r8a7743-iwg20m.dtsi"
#include "iwg20d-q7-common.dtsi"
#include "iwg20d-q7-dbcm-ca.dtsi"

/ {
	model = "iW-RainboW-G20D-Q7 RZ/G1M based plus camera daughter board";
	compatible = "iwave,g20d", "iwave,g20m", "renesas,r8a7743";
};

&pciec {
	status = "okay";
};

```
