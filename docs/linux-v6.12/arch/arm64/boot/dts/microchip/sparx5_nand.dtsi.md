---
sidebar_position: 3
---
# sparx5_nand.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/microchip/sparx5_nand.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0+ OR MIT)
/*
 * Copyright (c) 2020 Microchip Technology Inc. and its subsidiaries.
 */

&gpio {
	cs14_pins: cs14-pins {
		pins = "GPIO_44";
		function = "si";
	};
};

&spi0 {
	pinctrl-0 = <&si2_pins>;
	pinctrl-names = "default";
	spi@e {
		compatible = "spi-mux";
		mux-controls = <&mux>;
		#address-cells = <1>;
		#size-cells = <0>;
		reg = <14>; /* CS14 */
		flash@6 {
			compatible = "spi-nand";
			pinctrl-0 = <&cs14_pins>;
			pinctrl-names = "default";
			reg = <0x6>; /* SPI2 */
			spi-max-frequency = <42000000>;
			rx-sample-delay-ns = <7>;  /* Tune for speed */
		};
	};
};

```
