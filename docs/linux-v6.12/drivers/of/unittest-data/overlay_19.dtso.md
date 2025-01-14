---
sidebar_position: 21
---
# overlay_19.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_19.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

/* overlay_19 - notify test */

&unittest_test_bus {
	#address-cells = <1>;
	#size-cells = <0>;

	test-unittest19 {
		compatible = "unittest";
		reg = <19>;
	};
};

```
