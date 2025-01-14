---
sidebar_position: 129
---
# sama5d31.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/microchip/sama5d31.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * sama5d31.dtsi - Device Tree Include file for SAMA5D31 SoC
 *
 *  Copyright (C) 2013 Boris BREZILLON <b.brezillon@overkiz.com>
 */
#include "sama5d3.dtsi"
#include "sama5d3_lcd.dtsi"
#include "sama5d3_emac.dtsi"
#include "sama5d3_mci2.dtsi"
#include "sama5d3_uart.dtsi"

/ {
	compatible = "atmel,sama5d31", "atmel,sama5d3", "atmel,sama5";
};

```
