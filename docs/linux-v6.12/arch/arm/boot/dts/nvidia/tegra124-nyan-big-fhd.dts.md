---
sidebar_position: 68
---
# tegra124-nyan-big-fhd.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nvidia/tegra124-nyan-big-fhd.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;

#include "tegra124-nyan-big.dts"

/ {
	/* Version of Nyan Big with 1080p panel */
	host1x@50000000 {
		dpaux@545c0000 {
			aux-bus {
				panel: panel {
					compatible = "auo,b133htn01";
				};
			};
		};
	};
};

```
