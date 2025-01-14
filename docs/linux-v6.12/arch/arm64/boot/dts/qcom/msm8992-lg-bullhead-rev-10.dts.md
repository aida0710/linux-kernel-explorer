---
sidebar_position: 103
---
# msm8992-lg-bullhead-rev-10.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/msm8992-lg-bullhead-rev-10.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (c) Jean Thomas <virgule@jeanthomas.me>
 */

/dts-v1/;

#include "msm8992-lg-bullhead.dtsi"

/ {
	model = "LG Nexus 5X rev 1.0";

	/* required for bootloader to select correct board */
	qcom,board-id = <0xa64 0>;
};

```
