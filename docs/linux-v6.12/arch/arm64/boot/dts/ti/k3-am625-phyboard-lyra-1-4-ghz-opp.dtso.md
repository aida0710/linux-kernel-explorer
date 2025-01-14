---
sidebar_position: 68
---
# k3-am625-phyboard-lyra-1-4-ghz-opp.dtso

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/ti/k3-am625-phyboard-lyra-1-4-ghz-opp.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0-only OR MIT
/*
 * Copyright (C) 2024 PHYTEC America LLC
 * Author: Nathan Morrisson <nmorrisson@phytec.com>
 */

/dts-v1/;
/plugin/;

&vdd_core {
	regulator-min-microvolt = <850000>;
	regulator-max-microvolt = <850000>;
};

&a53_opp_table {
	opp-1400000000 {
		opp-hz = /bits/ 64 <1400000000>;
		opp-supported-hw = <0x01 0x0004>;
	};
};

```
