---
sidebar_position: 4
---
# mt7620a_eval.dts

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/ralink/mt7620a_eval.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;

/include/ "mt7620a.dtsi"

/ {
	compatible = "ralink,mt7620a-eval-board", "ralink,mt7620a-soc";
	model = "Ralink MT7620A evaluation board";

	memory@0 {
		device_type = "memory";
		reg = <0x0 0x2000000>;
	};

	chosen {
		bootargs = "console=ttyS0,57600";
	};
};

```
