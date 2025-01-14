---
sidebar_position: 316
---
# sc7280-herobrine-zombie-nvme-lte.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7280-herobrine-zombie-nvme-lte.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Google Zombie board device tree source
 *
 * Copyright 2022 Google LLC.
 */

/dts-v1/;

#include "sc7280-herobrine-zombie.dtsi"
#include "sc7280-herobrine-lte-sku.dtsi"
#include "sc7280-herobrine-nvme-sku.dtsi"

/ {
	model = "Google Zombie with LTE and NVMe";
	compatible = "google,zombie-sku514", "qcom,sc7280";
};

```
