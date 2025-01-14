---
sidebar_position: 20
---
# st-reset.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/power/reset/st-reset.txt`

### コンテンツ

```txt
*Device-Tree bindings for ST SW reset functionality

Required properties:
- compatible: should be "stih407-restart".
- st,syscfg: should be a phandle of the syscfg node.

Example node:
	restart {
		compatible = "st,stih407-restart";
		st,syscfg = <&syscfg_sbc_reg>;
	};

```
