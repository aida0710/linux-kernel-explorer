---
sidebar_position: 78
---
# stm32f769-disco-mb1166-reva09.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/st/stm32f769-disco-mb1166-reva09.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (c) 2023 Dario Binacchi <dario.binacchi@amarulasolutions.com>
 */

#include "stm32f769-disco.dts"

&panel0 {
	compatible = "frida,frd400b25025", "novatek,nt35510";
	vddi-supply = <&vcc_3v3>;
	vdd-supply = <&vcc_3v3>;
	/delete-property/power-supply;
};

```
