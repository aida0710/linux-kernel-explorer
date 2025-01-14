---
sidebar_position: 375
---
# sdm845-xiaomi-beryllium-ebbg.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sdm845-xiaomi-beryllium-ebbg.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0

/dts-v1/;

#include "sdm845-xiaomi-beryllium-common.dtsi"

/ {
	model = "Xiaomi Pocophone F1 (EBBG)";
	compatible = "xiaomi,beryllium-ebbg", "qcom,sdm845";
};

&display_panel {
	compatible = "ebbg,ft8719";
	status = "okay";
};

```
