---
sidebar_position: 2
---
# sun20i-common-regulators.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/riscv/boot/dts/allwinner/sun20i-common-regulators.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
// Copyright (C) 2021-2022 Samuel Holland <samuel@sholland.org>

/ {
	reg_vcc: vcc {
		compatible = "regulator-fixed";
		regulator-name = "vcc";
		regulator-min-microvolt = <5000000>;
		regulator-max-microvolt = <5000000>;
	};

	reg_vcc_3v3: vcc-3v3 {
		compatible = "regulator-fixed";
		regulator-name = "vcc-3v3";
		regulator-min-microvolt = <3300000>;
		regulator-max-microvolt = <3300000>;
		vin-supply = <&reg_vcc>;
	};
};

&pio {
	vcc-pb-supply = <&reg_vcc_3v3>;
	vcc-pc-supply = <&reg_vcc_3v3>;
	vcc-pd-supply = <&reg_vcc_3v3>;
	vcc-pe-supply = <&reg_vcc_3v3>;
	vcc-pf-supply = <&reg_vcc_3v3>;
	vcc-pg-supply = <&reg_vcc_3v3>;
};

```
