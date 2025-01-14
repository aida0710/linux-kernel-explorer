---
sidebar_position: 44
---
# rk3288-veyron-broadcom-bluetooth.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/rockchip/rk3288-veyron-broadcom-bluetooth.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Google Veyron (and derivatives) fragment for the Broadcom 43450 bluetooth
 * chip.
 *
 * Copyright 2019 Google, Inc
 */

&uart0 {
	bluetooth {
		pinctrl-names = "default";
		pinctrl-0 = <&bt_host_wake_l>, <&bt_enable_l>,
			    <&bt_dev_wake>;

		compatible = "brcm,bcm43540-bt";
		host-wakeup-gpios = <&gpio4 RK_PD7 GPIO_ACTIVE_HIGH>;
		shutdown-gpios = <&gpio4 RK_PD5 GPIO_ACTIVE_HIGH>;
		device-wakeup-gpios = <&gpio4 RK_PD2 GPIO_ACTIVE_HIGH>;
		max-speed = <3000000>;
		brcm,bt-pcm-int-params = [01 02 00 01 01];
	};
};

```
