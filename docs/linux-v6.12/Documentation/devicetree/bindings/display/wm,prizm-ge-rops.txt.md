---
sidebar_position: 77
---
# wm,prizm-ge-rops.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/display/wm,prizm-ge-rops.txt`

### コンテンツ

```txt
VIA/Wondermedia Graphics Engine Controller
-----------------------------------------------------

Required properties:
- compatible : "wm,prizm-ge-rops"
- reg : Should contain 1 register ranges(address and length)

Example:

	ge_rops@d8050400 {
		compatible = "wm,prizm-ge-rops";
		reg = <0xd8050400 0x100>;
	};

```
