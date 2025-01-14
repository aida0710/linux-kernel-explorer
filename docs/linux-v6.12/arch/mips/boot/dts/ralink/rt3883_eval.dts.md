---
sidebar_position: 16
---
# rt3883_eval.dts

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/ralink/rt3883_eval.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;

/include/ "rt3883.dtsi"

/ {
	compatible = "ralink,rt3883-eval-board", "ralink,rt3883-soc";
	model = "Ralink RT3883 evaluation board";

	memory@0 {
		device_type = "memory";
		reg = <0x0 0x2000000>;
	};

	chosen {
		bootargs = "console=ttyS0,57600";
	};
};

```
