---
sidebar_position: 78
---
# k3-am625-verdin-wifi-yavia.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/ti/k3-am625-verdin-wifi-yavia.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2023 Toradex
 *
 * https://www.toradex.com/computer-on-modules/verdin-arm-family/ti-am62
 * https://www.toradex.com/products/carrier-board/yavia
 */

/dts-v1/;

#include "k3-am625.dtsi"
#include "k3-am62-verdin.dtsi"
#include "k3-am62-verdin-wifi.dtsi"
#include "k3-am62-verdin-yavia.dtsi"

/ {
	model = "Toradex Verdin AM62 WB on Yavia Board";
	compatible = "toradex,verdin-am62-wifi-yavia",
		     "toradex,verdin-am62-wifi",
		     "toradex,verdin-am62",
		     "ti,am625";
};

```
