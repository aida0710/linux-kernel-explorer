---
sidebar_position: 53
---
# gpio-ts4800.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/gpio/gpio-ts4800.txt`

### コンテンツ

```txt
* TS-4800 FPGA's GPIO controller bindings

Required properties:
- compatible: Must be "technologic,ts4800-gpio".
- #gpio-cells: Should be two. The first cell is the pin number.
- reg: Physical base address of the controller and length
       of memory mapped region.

Optional property:
- ngpios: See "gpio.txt"

Example:

gpio1: gpio {
	compatible = "technologic,ts4800-gpio";
	reg = <0x10020 0x6>;
	ngpios = <8>;
	gpio-controller;
	#gpio-cells = <2>;
};

```
