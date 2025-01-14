---
sidebar_position: 431
---
# imx6ull-colibri-iris-v2.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/nxp/imx/imx6ull-colibri-iris-v2.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later OR MIT
/*
 * Copyright 2018-2022 Toradex
 */

#include "imx6ull-colibri-iris.dtsi"

/ {
	reg_3v3_vmmc: regulator-3v3-vmmc {
		compatible = "regulator-fixed";
		regulator-name = "3v3_vmmc";
		regulator-min-microvolt = <3300000>;
		regulator-max-microvolt = <3300000>;
		gpio = <&gpio1 26 GPIO_ACTIVE_HIGH>;
		startup-delay-us = <100>;
		enable-active-high;
	};
};


&usdhc1 {
	cap-power-off-card;
	vmmc-supply = <&reg_3v3_vmmc>;
	/delete-property/ keep-power-in-suspend;
	/delete-property/ no-1-8-v;
	status = "okay";
};

```
