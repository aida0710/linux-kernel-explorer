---
sidebar_position: 10
---
# mpfs-sev-kit-fabric.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/riscv/boot/dts/microchip/mpfs-sev-kit-fabric.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: (GPL-2.0 OR MIT)
/* Copyright (c) 2022 Microchip Technology Inc */

/ {
	fabric_clk3: fabric-clk3 {
		compatible = "fixed-clock";
		#clock-cells = <0>;
		clock-frequency = <0>;
	};

	fabric_clk1: fabric-clk1 {
		compatible = "fixed-clock";
		#clock-cells = <0>;
		clock-frequency = <125000000>;
	};
};

```
