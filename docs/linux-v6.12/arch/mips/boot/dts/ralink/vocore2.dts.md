---
sidebar_position: 17
---
# vocore2.dts

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/ralink/vocore2.dts`

### コンテンツ

```dts
/dts-v1/;

#include "mt7628a.dtsi"

/ {
	compatible = "vocore,vocore2", "ralink,mt7628a-soc";
	model = "VoCore2";

	memory@0 {
		device_type = "memory";
		reg = <0x0 0x8000000>;
	};

	chosen {
		bootargs = "console=ttyS2,115200";
		stdout-path = &uart2;
	};
};

```
