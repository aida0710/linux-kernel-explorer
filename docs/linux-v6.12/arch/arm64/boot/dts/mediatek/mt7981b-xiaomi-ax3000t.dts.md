---
sidebar_position: 25
---
# mt7981b-xiaomi-ax3000t.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt7981b-xiaomi-ax3000t.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only OR MIT

/dts-v1/;

#include "mt7981b.dtsi"

/ {
	compatible = "xiaomi,ax3000t", "mediatek,mt7981b";
	model = "Xiaomi AX3000T";

	memory@40000000 {
		reg = <0 0x40000000 0 0x10000000>;
		device_type = "memory";
	};
};

```
