---
sidebar_position: 20
---
# overlay_18.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_18.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

/* overlay_18 - notify test */

&unittest_test_bus {
	#address-cells = <1>;
	#size-cells = <0>;

	test-unittest18 {
		compatible = "unittest";
		reg = <18>;
	};
};

```
