---
sidebar_position: 19
---
# overlay_17.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_17.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

/* overlay_17 - notify test */

&unittest_test_bus {
	#address-cells = <1>;
	#size-cells = <0>;

	test-unittest17 {
		compatible = "unittest";
		reg = <17>;
	};
};

```
