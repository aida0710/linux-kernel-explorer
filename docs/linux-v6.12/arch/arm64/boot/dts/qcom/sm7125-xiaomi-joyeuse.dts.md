---
sidebar_position: 400
---
# sm7125-xiaomi-joyeuse.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sm7125-xiaomi-joyeuse.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (c) 2021, The Linux Foundation. All rights reserved.
 */

/dts-v1/;

#include "sm7125-xiaomi-common.dtsi"

/ {
	model = "Xiaomi Redmi Note 9 Pro (Global)";
	compatible = "xiaomi,joyeuse", "qcom,sm7125";

	/* required for bootloader to select correct board */
	qcom,board-id = <0x50022 1>;
};

```
