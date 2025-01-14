---
sidebar_position: 44
---
# tests-match.dtsi

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/tests-match.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0

/ {
	testcase-data {
		match-node {
			name0 { };
			name1 { device_type = "type1"; };
			a { name2 { device_type = "type1"; }; };
			b { name2 { }; };
			c { name2 { device_type = "type2"; }; };
			name3 { compatible = "compat3"; };
			name4 { compatible = "compat2", "compat3"; };
			name5 { compatible = "compat2", "compat3"; };
			name6 { compatible = "compat1", "compat2", "compat3"; };
			name7 { compatible = "compat2"; device_type = "type1"; };
			name8 { compatible = "compat2"; device_type = "type1"; };
			name9 { compatible = "compat2"; };
		};
	};
};

```
