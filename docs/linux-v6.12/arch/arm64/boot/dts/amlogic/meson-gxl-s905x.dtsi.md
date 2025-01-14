---
sidebar_position: 103
---
# meson-gxl-s905x.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/amlogic/meson-gxl-s905x.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2016 Endless Computers, Inc.
 * Author: Carlo Caione <carlo@endlessm.com>
 */

#include "meson-gxl.dtsi"
#include "meson-gxl-mali.dtsi"

/ {
	compatible = "amlogic,s905x", "amlogic,meson-gxl";
};

/* S905X only has access to its internal PHY */
&ethmac {
	phy-mode = "rmii";
	phy-handle = <&internal_phy>;
};

```
