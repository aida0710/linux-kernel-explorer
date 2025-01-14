---
sidebar_position: 35
---
# overlay_gpio_04b.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_gpio_04b.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

&unittest_test_bus {
	#address-cells = <1>;
	#size-cells = <0>;

	gpio@4 {
		line-c {
			gpio-hog;
			gpios = <3 0>;
			input;
			line-name = "line-C-input";
		};
	};
};

```
