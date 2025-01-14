---
sidebar_position: 120
---
# dra62x.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/dra62x.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-only

#include "dm814x.dtsi"

/ {
	compatible = "ti,dra62x";
};

/* Compared to dm814x, dra62x has different offsets for Ethernet */
&mac {
	reg = <0 0x800>,
	      <0x1200 0x100>;
};

&davinci_mdio {
	reg = <0x1000 0x100>;
};

#include "dra62x-clocks.dtsi"

```
