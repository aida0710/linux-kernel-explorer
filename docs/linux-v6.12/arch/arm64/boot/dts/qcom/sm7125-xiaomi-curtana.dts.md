---
sidebar_position: 399
---
# sm7125-xiaomi-curtana.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sm7125-xiaomi-curtana.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (c) 2023, Joe Mason <buddyjojo06@outlook.com>
 */

/dts-v1/;

#include "sm7125-xiaomi-common.dtsi"

/ {
	model = "Xiaomi Redmi Note 9S";
	compatible = "xiaomi,curtana", "qcom,sm7125";

	/* required for bootloader to select correct board */
	qcom,board-id = <0x20022 1>;
};

```
