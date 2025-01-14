---
sidebar_position: 24
---
# mt7981b-openwrt-one.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt7981b-openwrt-one.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only OR MIT

/dts-v1/;

#include "mt7981b.dtsi"

/ {
	compatible = "openwrt,one", "mediatek,mt7981b";
	model = "OpenWrt One";

	memory@40000000 {
		reg = <0 0x40000000 0 0x40000000>;
		device_type = "memory";
	};
};

```
