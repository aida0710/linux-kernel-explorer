---
sidebar_position: 265
---
# omap4-xyboard-mz617.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/omap4-xyboard-mz617.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/dts-v1/;

#include "motorola-mapphone-mz607-mz617.dtsi"

/ {
	model = "Motorola Xyboard MZ617";
	compatible = "motorola,xyboard-mz617", "ti,omap4430", "ti,omap4";

	chosen {
		stdout-path = &uart3;
	};

	aliases {
		display1 = &hdmi0;
	};
};

```
