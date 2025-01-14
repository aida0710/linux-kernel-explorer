---
sidebar_position: 17
---
# mstar-infinity3-msc313e.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/sigmastar/mstar-infinity3-msc313e.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright (c) 2020 thingy.jp.
 * Author: Daniel Palmer <daniel@thingy.jp>
 */

#include "mstar-infinity3.dtsi"

/ {
	memory@20000000 {
		device_type = "memory";
		reg = <0x20000000 0x4000000>;
	};
};

```
