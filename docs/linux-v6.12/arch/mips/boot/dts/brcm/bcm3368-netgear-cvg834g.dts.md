---
sidebar_position: 4
---
# bcm3368-netgear-cvg834g.dts

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/brcm/bcm3368-netgear-cvg834g.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;

#include "bcm3368.dtsi"

/ {
	compatible = "netgear,cvg834g", "brcm,bcm3368";
	model = "NETGEAR CVG834G";

	memory@0 {
		device_type = "memory";
		reg = <0x00000000 0x02000000>;
	};

	chosen {
		bootargs = "console=ttyS0,115200";
		stdout-path = &uart0;
	};
};

&uart0 {
	status = "okay";
};

```
