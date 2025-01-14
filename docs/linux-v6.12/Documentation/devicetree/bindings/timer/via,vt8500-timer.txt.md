---
sidebar_position: 76
---
# via,vt8500-timer.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/timer/via,vt8500-timer.txt`

### コンテンツ

```txt
VIA/Wondermedia VT8500 Timer
-----------------------------------------------------

Required properties:
- compatible : "via,vt8500-timer"
- reg : Should contain 1 register ranges(address and length)
- interrupts : interrupt for the timer

Example:

	timer@d8130100 {
		compatible = "via,vt8500-timer";
		reg = <0xd8130100 0x28>;
		interrupts = <36>;
	};

```
