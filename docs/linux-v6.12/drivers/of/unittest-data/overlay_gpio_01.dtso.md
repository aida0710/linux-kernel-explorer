---
sidebar_position: 30
---
# overlay_gpio_01.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_gpio_01.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

&unittest_test_bus {
	#address-cells = <1>;
	#size-cells = <0>;

	gpio@0 {
		compatible = "unittest-gpio";
		reg = <0>;
		gpio-controller;
		#gpio-cells = <2>;
		ngpios = <2>;
		gpio-line-names = "line-A", "line-B";

		line-b {
			gpio-hog;
			gpios = <2 0>;
			input;
			line-name = "line-B-input";
		};
	};
};

```
