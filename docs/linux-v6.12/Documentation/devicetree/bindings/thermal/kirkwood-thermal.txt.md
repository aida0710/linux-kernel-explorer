---
sidebar_position: 18
---
# kirkwood-thermal.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/thermal/kirkwood-thermal.txt`

### コンテンツ

```txt
* Kirkwood Thermal

This version is for Kirkwood 88F8262 & 88F6283 SoCs. Other kirkwoods
don't contain a thermal sensor.

Required properties:
- compatible : "marvell,kirkwood-thermal"
- reg : Address range of the thermal registers

Example:

	thermal@10078 {
		compatible = "marvell,kirkwood-thermal";
		reg = <0x10078 0x4>;
	};

```
