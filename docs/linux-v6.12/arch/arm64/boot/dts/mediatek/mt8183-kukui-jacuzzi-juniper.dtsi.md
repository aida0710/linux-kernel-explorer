---
sidebar_position: 70
---
# mt8183-kukui-jacuzzi-juniper.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/mediatek/mt8183-kukui-jacuzzi-juniper.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/*
 * Copyright 2021 Google LLC
 */

/dts-v1/;
#include "mt8183-kukui-jacuzzi.dtsi"

&i2c2 {
	trackpad@2c {
		compatible = "hid-over-i2c";
		reg = <0x2c>;
		hid-descr-addr = <0x20>;

		pinctrl-names = "default";
		pinctrl-0 = <&trackpad_pins>;

		interrupts-extended = <&pio 7 IRQ_TYPE_LEVEL_LOW>;

		wakeup-source;
	};
};

&qca_wifi {
	qcom,ath10k-calibration-variant = "GO_JUNIPER";
};


```
