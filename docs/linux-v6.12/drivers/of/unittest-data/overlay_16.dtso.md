---
sidebar_position: 18
---
# overlay_16.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_16.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

/* overlay_16 - notify test */

&unittest_test_bus {
	#address-cells = <1>;
	#size-cells = <0>;

	test-unittest16 {
		compatible = "unittest";
		reg = <16>;
	};
};

```
