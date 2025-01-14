---
sidebar_position: 32
---
# mt7986a-bananapi-bpi-r3-sd.dtso

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt7986a-bananapi-bpi-r3-sd.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Copyright (C) 2021 MediaTek Inc.
 * Author: Sam.Shih <sam.shih@mediatek.com>
 */

/dts-v1/;
/plugin/;

/ {
	compatible = "bananapi,bpi-r3", "mediatek,mt7986a";
};

&{/soc/mmc@11230000} {
	bus-width = <4>;
	max-frequency = <52000000>;
	cap-sd-highspeed;
	status = "okay";
};

```
