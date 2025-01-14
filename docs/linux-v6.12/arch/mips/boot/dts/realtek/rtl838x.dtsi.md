---
sidebar_position: 5
---
# rtl838x.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/mips/boot/dts/realtek/rtl838x.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: GPL-2.0-or-later OR BSD-2-Clause

/ {
	cpus {
		#address-cells = <1>;
		#size-cells = <0>;

		cpu@0 {
			device_type = "cpu";
			compatible = "mips,mips4KEc";
			reg = <0>;
			clocks = <&baseclk 0>;
			clock-names = "cpu";
		};
	};

	baseclk: baseclk {
		compatible = "fixed-clock";
		#clock-cells = <0>;
		clock-frequency = <500000000>;
	};
};

```
