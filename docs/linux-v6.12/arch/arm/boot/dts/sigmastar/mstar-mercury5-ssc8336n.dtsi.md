---
sidebar_position: 20
---
# mstar-mercury5-ssc8336n.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/sigmastar/mstar-mercury5-ssc8336n.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright (c) 2020 thingy.jp.
 * Author: Daniel Palmer <daniel@thingy.jp>
 */

#include "mstar-mercury5.dtsi"

/ {
	memory@20000000 {
		device_type = "memory";
		reg = <0x20000000 0x4000000>;
	};
};

```
