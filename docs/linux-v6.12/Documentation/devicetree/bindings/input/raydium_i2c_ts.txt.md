---
sidebar_position: 63
---
# raydium_i2c_ts.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/input/raydium_i2c_ts.txt`

### コンテンツ

```txt
Raydium I2C touchscreen

Required properties:
- compatible: must be "raydium,rm32380"
- reg: The I2C address of the device
- interrupts: interrupt to which the chip is connected
    See ../interrupt-controller/interrupts.txt
Optional properties:
- avdd-supply: analog power supply needed to power device
- vccio-supply: IO Power source
- reset-gpios: reset gpio the chip is connected to.

Example:
	touchscreen@39 {
		compatible = "raydium,rm32380";
		reg = <0x39>;
		interrupt-parent = <&gpio>;
		interrupts = <0x0 IRQ_TYPE_EDGE_FALLING>;
	};

```
