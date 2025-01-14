---
sidebar_position: 211
---
# imx6q-tqma6a.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6q-tqma6a.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright 2013 Sascha Hauer, Pengutronix
 * Copyright 2013-2017 Markus Niebel <Markus.Niebel@tq-group.com>
 */

#include "imx6q.dtsi"
#include "imx6qdl-tqma6a.dtsi"
#include "imx6qdl-tqma6.dtsi"

/ {
	memory@10000000 {
		device_type = "memory";
		reg = <0x10000000 0x40000000>;
	};
};

```
