---
sidebar_position: 340
---
# sdm630-sony-xperia-nile-discovery.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sdm630-sony-xperia-nile-discovery.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: BSD-3-Clause
/*
 * Copyright (c) 2020, Konrad Dybcio
 */

/dts-v1/;

#include "sdm630.dtsi"
#include "sdm630-sony-xperia-nile.dtsi"

/ {
	model = "Sony Xperia XA2 Ultra";
	compatible = "sony,discovery-row", "qcom,sdm630";
	chassis-type = "handset";
};

```
