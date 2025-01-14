---
sidebar_position: 38
---
# spear-thermal.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/thermal/spear-thermal.txt`

### コンテンツ

```txt
* SPEAr Thermal

Required properties:
- compatible : "st,thermal-spear1340"
- reg : Address range of the thermal registers
- st,thermal-flags: flags used to enable thermal sensor

Example:

	thermal@fc000000 {
		compatible = "st,thermal-spear1340";
		reg = <0xfc000000 0x1000>;
		st,thermal-flags = <0x7000>;
	};

```
