---
sidebar_position: 1
---
# via,vt8500-pmc.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/vt8500/via,vt8500-pmc.txt`

### コンテンツ

```txt
VIA/Wondermedia VT8500 Power Management Controller
-----------------------------------------------------

Required properties:
- compatible : "via,vt8500-pmc"
- reg : Should contain 1 register ranges(address and length)

Example:

	pmc@d8130000 {
		compatible = "via,vt8500-pmc";
		reg = <0xd8130000 0x1000>;
	};

```
