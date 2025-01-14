---
sidebar_position: 6
---
# mstar-infinity2m-ssd20xd.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/sigmastar/mstar-infinity2m-ssd20xd.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright (c) 2020 thingy.jp.
 * Author: Daniel Palmer <daniel@thingy.jp>
 */

#include "mstar-infinity2m.dtsi"

&gpio {
	compatible = "sstar,ssd20xd-gpio";
	status = "okay";
};

&smpctrl {
	compatible = "sstar,ssd201-smpctrl", "mstar,smpctrl";
	status = "okay";
};

```
