---
sidebar_position: 54
---
# ezchip_enet.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/net/ezchip_enet.txt`

### コンテンツ

```txt
* EZchip NPS Management Ethernet port driver

Required properties:
- compatible: Should be "ezchip,nps-mgt-enet"
- reg: Address and length of the register set for the device
- interrupts: Should contain the ENET interrupt

Examples:

	ethernet@f0003000 {
		compatible = "ezchip,nps-mgt-enet";
		reg = <0xf0003000 0x44>;
		interrupts = <7>;
		mac-address = [ 00 11 22 33 44 55 ];
	};

```
