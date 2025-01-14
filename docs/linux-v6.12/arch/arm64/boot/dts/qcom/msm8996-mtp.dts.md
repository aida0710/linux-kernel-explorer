---
sidebar_position: 120
---
# msm8996-mtp.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/msm8996-mtp.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (c) 2014-2015, The Linux Foundation. All rights reserved.
 */

/dts-v1/;

#include "msm8996.dtsi"

/ {
	model = "Qualcomm Technologies, Inc. MSM 8996 MTP";
	compatible = "qcom,msm8996-mtp", "qcom,msm8996";
	chassis-type = "handset";

	aliases {
		serial0 = &blsp2_uart2;
	};

	chosen {
		stdout-path = "serial0";
	};
};

&blsp2_uart2 {
	status = "okay";
};

&mdss_hdmi {
	status = "okay";
};

&mdss_hdmi_phy {
	status = "okay";
};

```
