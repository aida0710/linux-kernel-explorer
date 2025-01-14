---
sidebar_position: 14
---
# cirrus,clps711x-mctrl-gpio.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/gpio/cirrus,clps711x-mctrl-gpio.txt`

### コンテンツ

```txt
* ARM Cirrus Logic CLPS711X SYSFLG1 MCTRL GPIOs

Required properties:
- compatible: Should contain "cirrus,ep7209-mctrl-gpio".
- gpio-controller: Marks the device node as a gpio controller.
- #gpio-cells: Should be two. The first cell is the pin number and
  the second cell is used to specify the gpio polarity:
    0 = Active high,
    1 = Active low.

Example:
	sysgpio: sysgpio {
		compatible = "cirrus,ep7312-mctrl-gpio",
			     "cirrus,ep7209-mctrl-gpio";
		gpio-controller;
		#gpio-cells = <2>;
	};

```
