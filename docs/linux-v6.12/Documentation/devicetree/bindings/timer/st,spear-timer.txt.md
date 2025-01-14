---
sidebar_position: 69
---
# st,spear-timer.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/timer/st,spear-timer.txt`

### コンテンツ

```txt
* SPEAr ARM Timer

** Timer node required properties:

- compatible : Should be:
	"st,spear-timer"
- reg: Address range of the timer registers
- interrupt: Should contain the timer interrupt number

Example:

	timer@f0000000 {
		compatible = "st,spear-timer";
		reg = <0xf0000000 0x400>;
		interrupts = <2>;
	};

```
