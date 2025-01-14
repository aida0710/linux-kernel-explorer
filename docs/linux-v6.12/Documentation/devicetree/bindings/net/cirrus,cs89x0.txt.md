---
sidebar_position: 38
---
# cirrus,cs89x0.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/net/cirrus,cs89x0.txt`

### コンテンツ

```txt
* Cirrus Logic CS8900/CS8920 Network Controller

Required properties:
- compatible	: Should be "cirrus,cs8900" or "cirrus,cs8920".
- reg		: Address and length of the IO space.
- interrupts	: Should contain the controller interrupt line.

Examples:
	eth0: eth@10000000 {
		compatible = "cirrus,cs8900";
		reg = <0x10000000 0x400>;
		interrupts = <10>;
	};

```
