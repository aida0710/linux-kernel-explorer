---
sidebar_position: 150
---
# bcm958625-meraki-mx65w.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/broadcom/bcm958625-meraki-mx65w.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Device Tree Bindings for Cisco Meraki MX65W.
 *
 * Copyright (C) 2020-2021 Matthew Hagan <mnhagan88@gmail.com>
 */

/dts-v1/;

#include "bcm958625-meraki-alamo.dtsi"

/ {
	model = "Cisco Meraki MX65W";
	compatible = "meraki,mx65w", "brcm,bcm58625", "brcm,nsp";

	chosen {
		stdout-path = "serial0:115200n8";
	};

	memory@60000000 {
		device_type = "memory";
		reg = <0x60000000 0x80000000>;
	};
};

&pcie0 {
	status = "okay";
};

&pcie1 {
	status = "okay";
};

```
