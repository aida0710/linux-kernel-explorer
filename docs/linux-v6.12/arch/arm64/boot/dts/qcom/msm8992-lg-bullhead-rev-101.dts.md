---
sidebar_position: 104
---
# msm8992-lg-bullhead-rev-101.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/msm8992-lg-bullhead-rev-101.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (c) Jean Thomas <virgule@jeanthomas.me>
 */

/dts-v1/;

#include "msm8992-lg-bullhead.dtsi"

/ {
	model = "LG Nexus 5X rev 1.01";

	/* required for bootloader to select correct board */
	qcom,board-id = <0xb64 0>;
};

```
