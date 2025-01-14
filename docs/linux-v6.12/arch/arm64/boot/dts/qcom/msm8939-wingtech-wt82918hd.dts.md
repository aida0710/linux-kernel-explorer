---
sidebar_position: 90
---
# msm8939-wingtech-wt82918hd.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/msm8939-wingtech-wt82918hd.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only

/dts-v1/;

#include "msm8939-pm8916.dtsi"
#include "msm8939-wingtech-wt82918.dtsi"

/ {
	model = "Lenovo Vibe K5 (HD) (Wingtech WT82918)";
	compatible = "wingtech,wt82918hdhw39", "qcom,msm8939";
	chassis-type = "handset";
};

&touchscreen {
	touchscreen-size-x = <720>;
	touchscreen-size-y = <1280>;
};

```
