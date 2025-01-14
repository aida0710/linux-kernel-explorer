---
sidebar_position: 77
---
# k3-am625-verdin-wifi-mallow.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/ti/k3-am625-verdin-wifi-mallow.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2023 Toradex
 *
 * https://www.toradex.com/computer-on-modules/verdin-arm-family/ti-am62
 * https://www.toradex.com/products/carrier-board/mallow-carrier-board
 */

/dts-v1/;

#include "k3-am625.dtsi"
#include "k3-am62-verdin.dtsi"
#include "k3-am62-verdin-wifi.dtsi"
#include "k3-am62-verdin-mallow.dtsi"

/ {
	model = "Toradex Verdin AM62 WB on Mallow Board";
	compatible = "toradex,verdin-am62-wifi-mallow",
		     "toradex,verdin-am62-wifi",
		     "toradex,verdin-am62",
		     "ti,am625";
};

```
