---
sidebar_position: 33
---
# msm8216-samsung-fortuna3g.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/msm8216-samsung-fortuna3g.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only

/dts-v1/;

#include "msm8916-samsung-fortuna-common.dtsi"

/ {
	model = "Samsung Galaxy Grand Prime (SM-G530H)";
	compatible = "samsung,fortuna3g", "qcom,msm8916";
	chassis-type = "handset";
};

&battery {
	charge-term-current-microamp = <200000>;
	constant-charge-current-max-microamp = <1000000>;
	constant-charge-voltage-max-microvolt = <4350000>;
};

&st_accel {
	status = "okay";
};

&st_magn {
	status = "okay";
};

```
