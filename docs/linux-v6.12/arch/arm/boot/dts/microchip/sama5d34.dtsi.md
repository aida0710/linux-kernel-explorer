---
sidebar_position: 133
---
# sama5d34.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/microchip/sama5d34.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * sama5d34.dtsi - Device Tree Include file for SAMA5D34 SoC
 *
 *  Copyright (C) 2013 Boris BREZILLON <b.brezillon@overkiz.com>
 */
#include "sama5d3.dtsi"
#include "sama5d3_lcd.dtsi"
#include "sama5d3_gmac.dtsi"
#include "sama5d3_can.dtsi"
#include "sama5d3_mci2.dtsi"

/ {
	compatible = "atmel,sama5d34", "atmel,sama5d3", "atmel,sama5";
};

```
