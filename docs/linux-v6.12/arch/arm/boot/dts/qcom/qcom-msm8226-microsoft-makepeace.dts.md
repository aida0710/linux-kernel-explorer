---
sidebar_position: 60
---
# qcom-msm8226-microsoft-makepeace.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/qcom/qcom-msm8226-microsoft-makepeace.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: BSD-3-Clause
/*
 * Copyright (c) 2023, Jack Matthews <jm5112356@gmail.com>
 * Copyright (c) 2023, Ivaylo Ivanov <ivo.ivanov.ivanov1@gmail.com>
 * Copyright (c) 2023, Dominik Kobinski <dominikkobinski314@gmail.com>
 * Copyright (c) 2023, Rayyan Ansari <rayyan@ansari.sh>
 */

/dts-v1/;

#include "qcom-msm8226-microsoft-common.dtsi"

/ {
	model = "Microsoft Lumia 640 XL";
	compatible = "microsoft,makepeace", "qcom,msm8226";
	chassis-type = "handset";
};

```
