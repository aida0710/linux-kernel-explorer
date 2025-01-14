---
sidebar_position: 317
---
# sc7280-herobrine-zombie-nvme.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7280-herobrine-zombie-nvme.dts`

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
#include "sc7280-herobrine-wifi-sku.dtsi"
#include "sc7280-herobrine-nvme-sku.dtsi"

/ {
	model = "Google Zombie with NVMe";
	compatible = "google,zombie-sku2","google,zombie-sku3","google,zombie-sku515", "qcom,sc7280";
};

```
