---
sidebar_position: 4
---
# ciu2.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/mips/cavium/ciu2.txt`

### コンテンツ

```txt
* Central Interrupt Unit

Properties:
- compatible: "cavium,octeon-6880-ciu2"

  Compatibility with 68XX SOCs.

- interrupt-controller:  This is an interrupt controller.

- reg: The base address of the CIU's register bank.

- #interrupt-cells: Must be <2>.  The first cell is the bank within
  the CIU and may have a value between 0 and 63.  The second cell is
  the bit within the bank and may also have a value between 0 and 63.

Example:
	interrupt-controller@1070100000000 {
		compatible = "cavium,octeon-6880-ciu2";
		interrupt-controller;
		/* Interrupts are specified by two parts:
		 * 1) Controller register (0..63)
		 * 2) Bit within the register (0..63)
		 */
		#address-cells = <0>;
		#interrupt-cells = <2>;
		reg = <0x10701 0x00000000 0x0 0x4000000>;
	};

```
