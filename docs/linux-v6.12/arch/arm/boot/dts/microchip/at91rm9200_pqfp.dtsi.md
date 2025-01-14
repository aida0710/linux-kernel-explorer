---
sidebar_position: 57
---
# at91rm9200_pqfp.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/microchip/at91rm9200_pqfp.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * at91rm9200_pqfp.dtsi - Device Tree Include file for AT91RM9200 PQFP family SoC
 *
 * Copyright (C) 2013 Jean-Christophe PLAGNIOL-VILLARD <plagnioj@jcrosoft.com>
 */

#include "at91rm9200.dtsi"

/ {
	compatible = "atmel,at91rm9200-pqfp", "atmel,at91rm9200";
};

&pioD {
	status = "disabled";
};

```
