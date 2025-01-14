---
sidebar_position: 52
---
# sun50i-h6-tanix-tx6-mini.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/allwinner/sun50i-h6-tanix-tx6-mini.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
// Copyright (c) 2021 Jernej Skrabec <jernej.skrabec@gmail.com>

/dts-v1/;

#include "sun50i-h6-tanix.dtsi"

/ {
	model = "Tanix TX6 mini";
	compatible = "oranth,tanix-tx6-mini", "allwinner,sun50i-h6";
};

&r_ir {
	linux,rc-map-name = "rc-tanix-tx3mini";
};

```
