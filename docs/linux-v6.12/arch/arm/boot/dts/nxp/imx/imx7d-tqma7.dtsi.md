---
sidebar_position: 521
---
# imx7d-tqma7.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx7d-tqma7.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0 OR X11
/*
 * Device Tree Include file for TQ-Systems TQMa7D board with NXP i.MX7Dual SoC.
 *
 * Copyright (C) 2016 TQ-Systems GmbH
 * Author: Markus Niebel <Markus.Niebel@tq-group.com>
 * Copyright (C) 2019 Bruno Thomsen <bruno.thomsen@gmail.com>
 */

#include "imx7d.dtsi"
#include "imx7-tqma7.dtsi"

&cpu1 {
	cpu-supply = <&sw1a_reg>;
};

```
