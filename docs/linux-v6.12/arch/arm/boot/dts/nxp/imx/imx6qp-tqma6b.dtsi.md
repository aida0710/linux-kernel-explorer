---
sidebar_position: 333
---
# imx6qp-tqma6b.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6qp-tqma6b.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later
/*
 * Copyright 2013 Sascha Hauer, Pengutronix
 */

#include "imx6q.dtsi"
#include "imx6qp.dtsi"
#include "imx6qdl-tqma6b.dtsi"
#include "imx6qdl-tqma6.dtsi"

/ {
	memory@10000000 {
		device_type = "memory";
		reg = <0x10000000 0x40000000>;
	};
};

```
