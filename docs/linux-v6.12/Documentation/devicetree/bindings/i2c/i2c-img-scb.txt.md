---
sidebar_position: 27
---
# i2c-img-scb.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/i2c/i2c-img-scb.txt`

### コンテンツ

```txt
IMG Serial Control Bus (SCB) I2C Controller

Required Properties:
- compatible: "img,scb-i2c"
- reg: Physical base address and length of controller registers
- interrupts: Interrupt number used by the controller
- clocks : Should contain a clock specifier for each entry in clock-names
- clock-names : Should contain the following entries:
                "scb", for the SCB core clock.
                "sys", for the system clock.
- clock-frequency: The I2C bus frequency in Hz
- #address-cells: Should be <1>
- #size-cells: Should be <0>

Example:

i2c@18100000 {
	compatible = "img,scb-i2c";
	reg = <0x18100000 0x200>;
	interrupts = <GIC_SHARED 2 IRQ_TYPE_LEVEL_HIGH>;
	clocks = <&i2c0_clk>, <&system_clk>;
	clock-names = "scb", "sys";
	clock-frequency = <400000>;
	#address-cells = <1>;
	#size-cells = <0>;
};

```
