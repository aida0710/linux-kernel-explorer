---
sidebar_position: 121
---
# via,vt8500-intc.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/interrupt-controller/via,vt8500-intc.txt`

### コンテンツ

```txt
VIA/Wondermedia VT8500 Interrupt Controller
-----------------------------------------------------

Required properties:
- compatible : "via,vt8500-intc"
- reg : Should contain 1 register ranges(address and length)
- #interrupt-cells : should be <1>

Example:

	intc: interrupt-controller@d8140000 {
		compatible = "via,vt8500-intc";
		interrupt-controller;
		reg = <0xd8140000 0x10000>;
		#interrupt-cells = <1>;
	};

```
