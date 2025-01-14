---
sidebar_position: 32
---
# overlay_gpio_02b.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_gpio_02b.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

&unittest_test_bus {
	#address-cells = <1>;
	#size-cells = <0>;

	gpio@2 {
		line-a {
			gpio-hog;
			gpios = <1 0>;
			input;
			line-name = "line-A-input";
		};
	};
};

```
