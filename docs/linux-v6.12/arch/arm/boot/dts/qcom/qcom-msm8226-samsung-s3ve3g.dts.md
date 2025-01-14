---
sidebar_position: 64
---
# qcom-msm8226-samsung-s3ve3g.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/qcom/qcom-msm8226-samsung-s3ve3g.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: BSD-3-Clause
/*
 * Copyright (c) 2020, The Linux Foundation. All rights reserved.
 */

#include "qcom-msm8226.dtsi"

/ {
	model = "Samsung Galaxy S III Neo";
	compatible = "samsung,s3ve3g", "qcom,msm8226";
	chassis-type = "handset";

	aliases {
		serial0 = &blsp1_uart3;
	};

	chosen {
		stdout-path = "serial0:115200n8";
	};
};

&blsp1_uart3 {
	status = "okay";
};

```
