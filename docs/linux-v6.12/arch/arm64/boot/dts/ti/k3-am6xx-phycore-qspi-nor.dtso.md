---
sidebar_position: 4
---
# k3-am6xx-phycore-qspi-nor.dtso

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/ti/k3-am6xx-phycore-qspi-nor.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0-only OR MIT
/*
 * Copyright (C) 2024 PHYTEC America LLC
 * Author: Nathan Morrisson <nmorrisson@phytec.com>
 */

/dts-v1/;
/plugin/;

#include "k3-pinctrl.h"

&serial_flash {
	spi-tx-bus-width = <1>;
	spi-rx-bus-width = <4>;
};

```
