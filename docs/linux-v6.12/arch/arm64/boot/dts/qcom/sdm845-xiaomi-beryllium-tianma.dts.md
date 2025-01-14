---
sidebar_position: 376
---
# sdm845-xiaomi-beryllium-tianma.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sdm845-xiaomi-beryllium-tianma.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0

/dts-v1/;

#include "sdm845-xiaomi-beryllium-common.dtsi"

/ {
	model = "Xiaomi Pocophone F1 (Tianma)";
	compatible = "xiaomi,beryllium", "qcom,sdm845";
};

&display_panel {
	compatible = "tianma,fhd-video", "novatek,nt36672a";
	status = "okay";
};

```
