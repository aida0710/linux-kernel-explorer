---
sidebar_position: 177
---
# kirkwood-rs411.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/marvell/kirkwood-rs411.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Andrew Lunn <andrew@lunn.ch>
 * Ben Peddell <klightspeed@killerwolves.net>
 *
 */

/dts-v1/;

#include "kirkwood.dtsi"
#include "kirkwood-6282.dtsi"
#include "kirkwood-synology.dtsi"

/ {
	model = "Synology RS411 RS812";
	compatible = "synology,rs411", "synology,rs812", "marvell,kirkwood";

	memory {
		device_type = "memory";
		reg = <0x00000000 0x8000000>;
	};

	chosen {
		bootargs = "console=ttyS0,115200n8";
		stdout-path = &uart0;
	};

	gpio-fan-100-15-35-3 {
		status = "okay";
	};

	gpio-leds-hdd-36 {
		status = "okay";
	};
};

&eth1 {
	status = "okay";
};

&s35390a {
	status = "okay";
};

```
