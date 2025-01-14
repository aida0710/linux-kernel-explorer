---
sidebar_position: 47
---
# tests-platform.dtsi

### ファイル情報

- パス: `linux-v6.12/drivers/of/unittest-data/tests-platform.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0

/ {
	testcase-data {
		platform-tests {
			#address-cells = <1>;
			#size-cells = <0>;

			test-device@0 {
				compatible = "test-device";
				reg = <0x0>;

				#address-cells = <1>;
				#size-cells = <0>;

				dev@100 {
					compatible = "test-sub-device";
					reg = <0x100>;
				};
			};

			test-device@1 {
				compatible = "test-device";
				reg = <0x1>;

				#address-cells = <1>;
				#size-cells = <0>;

				dev@100 {
					compatible = "test-sub-device",
						     "test-compat2",
						     "test-compat3";
					reg = <0x100>;
				};
			};
		};
	};
};

```
