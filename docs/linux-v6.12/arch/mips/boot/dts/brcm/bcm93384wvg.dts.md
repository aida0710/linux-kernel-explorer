---
sidebar_position: 24
---
# bcm93384wvg.dts

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/brcm/bcm93384wvg.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;

#include "bcm3384_zephyr.dtsi"

/ {
	compatible = "brcm,bcm93384wvg", "brcm,bcm3384";
	model = "Broadcom BCM93384WVG";

	chosen {
		bootargs = "console=ttyS0,115200";
		stdout-path = &uart0;
	};
};

&uart0 {
	status = "okay";
};

&ehci0 {
	status = "okay";
};

&ohci0 {
	status = "okay";
};

```
