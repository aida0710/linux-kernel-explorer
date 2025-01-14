---
sidebar_position: 2
---
# cisco_sg220-26.dts

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/realtek/cisco_sg220-26.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR BSD-2-Clause

/dts-v1/;

#include "rtl83xx.dtsi"
#include "rtl838x.dtsi"

/ {
	model = "Cisco SG220-26";
	compatible = "cisco,sg220-26", "realtek,rtl8382-soc";

	chosen {
		stdout-path = "serial0:9600n8";
		bootargs = "earlycon console=ttyS0,9600";
	};

	memory@0 {
		device_type = "memory";
		reg = <0x0 0x8000000>;
	};
};

&uart0 {
	status = "okay";
};

```
