---
sidebar_position: 23
---
# gateworks,pld-gpio.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/gpio/gateworks,pld-gpio.txt`

### コンテンツ

```txt
Gateworks PLD GPIO controller bindings

The GPIO controller should be a child node on an I2C bus.

Required properties:
- compatible: Should be "gateworks,pld-gpio"
- reg: I2C slave address
- gpio-controller: Marks the device node as a GPIO controller.
- #gpio-cells: Should be <2>. The first cell is the gpio number and
  the second cell is used to specify optional parameters.

Example:

pld@56 {
	compatible = "gateworks,pld-gpio";
	reg = <0x56>;
	gpio-controller;
	#gpio-cells = <2>;
};

```
