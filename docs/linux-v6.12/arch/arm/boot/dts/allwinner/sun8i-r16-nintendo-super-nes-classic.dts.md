---
sidebar_position: 163
---
# sun8i-r16-nintendo-super-nes-classic.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/allwinner/sun8i-r16-nintendo-super-nes-classic.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0 OR X11
/* Copyright (c) 2018 Miquèl RAYNAL <miquel.raynal@bootlin.com> */

/dts-v1/;
#include "sun8i-r16-nintendo-nes-classic.dts"

/ {
	model = "Nintendo SuperNES Classic Edition";
	compatible = "nintendo,super-nes-classic", "nintendo,nes-classic",
		     "allwinner,sun8i-r16", "allwinner,sun8i-a33";
};

```
