---
sidebar_position: 5
---
# lx200mx.dts

### ファイル情報

- パス: `linux-v6.12/arch/xtensa/boot/dts/lx200mx.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/include/ "xtfpga.dtsi"
/include/ "xtfpga-flash-16m.dtsi"

/ {
	compatible = "cdns,xtensa-lx200";
	memory@0 {
		device_type = "memory";
		reg = <0x00000000 0x06000000>;
	};
	pic: pic {
		compatible = "cdns,xtensa-mx";
		#interrupt-cells = <2>;
		interrupt-controller;
	};
};

```
