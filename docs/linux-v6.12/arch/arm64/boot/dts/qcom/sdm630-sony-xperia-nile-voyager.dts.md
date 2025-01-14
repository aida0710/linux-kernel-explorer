---
sidebar_position: 342
---
# sdm630-sony-xperia-nile-voyager.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sdm630-sony-xperia-nile-voyager.dts`

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
	model = "Sony Xperia XA2 Plus";
	compatible = "sony,voyager-row", "qcom,sdm630";
	chassis-type = "handset";

	chosen {
		framebuffer@9d400000 {
			reg = <0 0x9d400000 0 (2160 * 1080 * 4)>;
			height = <2160>;
		};
	};
};

```
