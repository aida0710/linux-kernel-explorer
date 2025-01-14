---
sidebar_position: 117
---
# msm8994-sony-xperia-kitakami-suzuran.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/msm8994-sony-xperia-kitakami-suzuran.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: BSD-3-Clause
/*
 * Copyright (c) 2020, Konrad Dybcio <konrad.dybcio@somainline.org>
 */

/dts-v1/;

#include "msm8994-sony-xperia-kitakami.dtsi"

/ {
	model = "Sony Xperia Z5 Compact";
	compatible = "sony,suzuran-row", "qcom,msm8994";
	chassis-type = "handset";
};

&pm8994_l14 {
	regulator-min-microvolt = <2000000>;
	regulator-max-microvolt = <2000000>;
};

/delete-node/ &pm8994_l19;

```
