---
sidebar_position: 26
---
# overlay_bad_symbol.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_bad_symbol.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

&electric_1 {
	// This label should cause an error when the overlay
	// is applied.  There is already a symbol hvac_1
	// in the base tree
	hvac_1: hvac-medium-2 {
		compatible = "ot,hvac-medium";
		heat-range = <50 75>;
		cool-range = <60 80>;
	};

};

```
