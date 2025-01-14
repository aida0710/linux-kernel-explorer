---
sidebar_position: 25
---
# overlay_bad_phandle.dtso

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/overlay_bad_phandle.dtso`

### コンテンツ

```dtso
// SPDX-License-Identifier: GPL-2.0
/dts-v1/;
/plugin/;

&electric_1 {
	// This label should cause an error when the overlay
	// is applied.  There is already a phandle value
	// in the base tree for motor-1.
	spin_ctrl_1_conflict: motor-1 {
		accelerate = <3>;
		decelerate = <5>;
	};
};

```
