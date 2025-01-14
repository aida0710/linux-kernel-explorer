---
sidebar_position: 540
---
# imx25-eukrea-mbimxsd25-baseboard-dvi-svga.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx25-eukrea-mbimxsd25-baseboard-dvi-svga.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright 2013 Eukréa Electromatique <denis@eukrea.com>
 */

#include "imx25-eukrea-mbimxsd25-baseboard.dts"

/ {
	model = "Eukrea MBIMXSD25 with the DVI-SVGA Display";
	compatible = "eukrea,mbimxsd25-baseboard-dvi-svga", "eukrea,mbimxsd25-baseboard", "eukrea,cpuimx25", "fsl,imx25";

	dvi_svga: display {
		model = "DVI-SVGA";
		bits-per-pixel = <16>;
		fsl,pcr = <0xfa208b80>;
		bus-width = <18>;
		display-timings {
			native-mode = <&dvi_svga_timings>;
			dvi_svga_timings: timing0 {
				clock-frequency = <40000000>;
				hactive = <800>;
				vactive = <600>;
				hback-porch = <75>;
				hfront-porch = <75>;
				vback-porch = <7>;
				vfront-porch = <75>;
				hsync-len = <7>;
				vsync-len = <7>;
			};
		};
	};
};

&lcdc {
	display = <&dvi_svga>;
	status = "okay";
};

```
