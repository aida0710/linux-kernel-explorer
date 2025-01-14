---
sidebar_position: 10
---
# pxa300-raumfeld-speaker-m.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/intel/pxa/pxa300-raumfeld-speaker-m.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0

/dts-v1/;

#include "pxa300-raumfeld-common.dtsi"
#include "pxa300-raumfeld-tuneable-clock.dtsi"

/ {
	model = "Raumfeld Speaker M (PXA3xx)";
	compatible = "raumfeld,raumfeld-speaker-m-pxa303", "marvell,pxa300";
};

```
