---
sidebar_position: 12
---
# ifi_canfd.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/net/can/ifi_canfd.txt`

### コンテンツ

```txt
IFI CANFD controller
--------------------

Required properties:
  - compatible: Should be "ifi,canfd-1.0"
  - reg: Should contain CAN controller registers location and length
  - interrupts: Should contain IRQ line for the CAN controller

Example:

	canfd0: canfd@ff220000 {
		compatible = "ifi,canfd-1.0";
		reg = <0xff220000 0x00001000>;
		interrupts = <0 43 0>;
	};

```
