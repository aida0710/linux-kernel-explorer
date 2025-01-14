---
sidebar_position: 33
---
# overlay_gpio_03.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_gpio_03.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

&unittest_test_bus {
	#address-cells = <1>;
	#size-cells = <0>;

	gpio@3 {
		compatible = "unittest-gpio";
		reg = <3>;
		gpio-controller;
		#gpio-cells = <2>;
		ngpios = <2>;
		gpio-line-names = "line-A", "line-B", "line-C", "line-D";

		line-d {
			gpio-hog;
			gpios = <4 0>;
			input;
			line-name = "line-D-input";
		};
	};
};

```
