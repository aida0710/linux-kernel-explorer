---
sidebar_position: 42
---
# gpio-moxtet.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/gpio/gpio-moxtet.txt`

### コンテンツ

```txt
Turris Mox Moxtet GPIO expander via Moxtet bus

Required properties:
 - compatible		: Should be "cznic,moxtet-gpio".
 - gpio-controller	: Marks the device node as a GPIO controller.
 - #gpio-cells		: Should be two. For consumer use see gpio.txt.

Other properties are required for a Moxtet bus device, please refer to
Documentation/devicetree/bindings/bus/moxtet.txt.

Example:

	moxtet_sfp: gpio@0 {
		compatible = "cznic,moxtet-gpio";
		gpio-controller;
		#gpio-cells = <2>;
		reg = <0>;
	}

```
