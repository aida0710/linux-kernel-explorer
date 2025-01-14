---
sidebar_position: 116
---
# msm8994-sony-xperia-kitakami-sumire.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/msm8994-sony-xperia-kitakami-sumire.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: BSD-3-Clause
/*
 * Copyright (c) 2020, Konrad Dybcio <konrad.dybcio@somainline.org>
 */

/dts-v1/;

#include "msm8994-sony-xperia-kitakami.dtsi"

/ {
	model = "Sony Xperia Z5";
	compatible = "sony,sumire-row", "qcom,msm8994";
	chassis-type = "handset";
};

/delete-node/ &pm8994_l19;

```
