---
sidebar_position: 14
---
# mstar-infinity2m-ssd202d.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/sigmastar/mstar-infinity2m-ssd202d.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright (c) 2020 thingy.jp.
 * Author: Daniel Palmer <daniel@thingy.jp>
 */

#include "mstar-infinity2m-ssd20xd.dtsi"

/ {
	memory {
		device_type = "memory";
		reg = <0x20000000 0x8000000>;
	};
};

```
