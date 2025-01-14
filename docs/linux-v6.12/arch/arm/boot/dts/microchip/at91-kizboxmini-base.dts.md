---
sidebar_position: 17
---
# at91-kizboxmini-base.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/microchip/at91-kizboxmini-base.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * at91-kizboxmini-base.dts - Device Tree file for Overkiz Kizbox mini
 * base board
 *
 * Copyright (C) 2015 Overkiz SAS
 *   Author: Antoine Aubert <a.aubert@overkiz.com>
 *           Kévin Raymond <k.raymond@overkiz.com>
 */
/dts-v1/;
#include "at91-kizboxmini-common.dtsi"

/ {
	model = "Overkiz Kizbox Mini";
	compatible = "overkiz,kizboxmini-base", "atmel,at91sam9g25",
		     "atmel,at91sam9x5", "atmel,at91sam9";
};

&pinctrl_usart0 {
	atmel,pins =
		<AT91_PIOA 0 AT91_PERIPH_A AT91_PINCTRL_PULL_UP
		 AT91_PIOA 1 AT91_PERIPH_A AT91_PINCTRL_NONE
		 AT91_PIOA 2 AT91_PERIPH_GPIO AT91_PINCTRL_MULTI_DRIVE>;
};

```
