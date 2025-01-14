---
sidebar_position: 98
---
# qcom-msm8974pro.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/qcom/qcom-msm8974pro.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0
#include "qcom-msm8974.dtsi"

&gcc {
	compatible = "qcom,gcc-msm8974pro";
};

&gpu {
	compatible = "qcom,adreno-330.2", "qcom,adreno";
};

&sdhc_1 {
	clocks = <&gcc GCC_SDCC1_AHB_CLK>,
		 <&gcc GCC_SDCC1_APPS_CLK>,
		 <&xo_board>,
		 <&gcc GCC_SDCC1_CDCCAL_FF_CLK>,
		 <&gcc GCC_SDCC1_CDCCAL_SLEEP_CLK>;
	clock-names = "iface", "core", "xo", "cal", "sleep";
};

```
