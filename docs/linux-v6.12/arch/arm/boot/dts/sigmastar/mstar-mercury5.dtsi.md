---
sidebar_position: 21
---
# mstar-mercury5.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/sigmastar/mstar-mercury5.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright (c) 2020 thingy.jp.
 * Author: Daniel Palmer <daniel@thingy.jp>
 */

#include "mstar-v7.dtsi"

&imi {
	reg = <0xa0000000 0x20000>;
};

```
