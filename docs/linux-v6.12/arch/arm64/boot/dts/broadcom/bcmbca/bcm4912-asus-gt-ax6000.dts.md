---
sidebar_position: 7
---
# bcm4912-asus-gt-ax6000.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/broadcom/bcmbca/bcm4912-asus-gt-ax6000.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT

/dts-v1/;

#include "bcm4912.dtsi"

/ {
	compatible = "asus,gt-ax6000", "brcm,bcm4912", "brcm,bcmbca";
	model = "Asus GT-AX6000";

	memory@0 {
		device_type = "memory";
		reg = <0x00 0x00 0x00 0x40000000>;
	};
};

&uart0 {
	status = "okay";
};

```
