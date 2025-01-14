---
sidebar_position: 2
---
# k3-am6xx-phycore-disable-rtc.dtso

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/ti/k3-am6xx-phycore-disable-rtc.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0-only OR MIT
/*
 * Copyright (C) 2023 PHYTEC America, LLC
 * Author: Garrett Giordano <ggiordano@phytec.com>
 *
 * Copyright (C) 2024 PHYTEC America, LLC
 * Author: Nathan Morrisson <nmorrisson@phytec.com>
 */

/dts-v1/;
/plugin/;

&i2c_som_rtc {
	status = "disabled";
};

```
