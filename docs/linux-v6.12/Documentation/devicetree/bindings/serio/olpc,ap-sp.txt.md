---
sidebar_position: 4
---
# olpc,ap-sp.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/serio/olpc,ap-sp.txt`

### コンテンツ

```txt
OLPC AP-SP serio interface

Required properties:
- compatible : "olpc,ap-sp"
- reg : base address and length of SoC's WTM registers
- interrupts : SP-AP interrupt

Example:
	ap-sp@d4290000 {
		compatible = "olpc,ap-sp";
		reg = <0xd4290000 0x1000>;
		interrupts = <40>;
	}

```
