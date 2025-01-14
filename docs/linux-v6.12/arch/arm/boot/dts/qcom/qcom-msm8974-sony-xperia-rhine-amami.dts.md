---
sidebar_position: 84
---
# qcom-msm8974-sony-xperia-rhine-amami.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/qcom/qcom-msm8974-sony-xperia-rhine-amami.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0
#include "qcom-msm8974-sony-xperia-rhine.dtsi"

/ {
	model = "Sony Xperia Z1 Compact";
	compatible = "sony,xperia-amami", "qcom,msm8974";
	chassis-type = "handset";
};

&smbb {
	qcom,fast-charge-safe-current = <1300000>;
	qcom,fast-charge-current-limit = <1300000>;
	qcom,dc-current-limit = <1300000>;
};

```
