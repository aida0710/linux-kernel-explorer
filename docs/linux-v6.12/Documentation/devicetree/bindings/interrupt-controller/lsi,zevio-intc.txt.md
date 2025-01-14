---
sidebar_position: 58
---
# lsi,zevio-intc.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/interrupt-controller/lsi,zevio-intc.txt`

### コンテンツ

```txt
TI-NSPIRE interrupt controller

Required properties:
- compatible: Compatible property value should be "lsi,zevio-intc".

- reg: Physical base address of the controller and length of memory mapped
	region.

- interrupt-controller : Identifies the node as an interrupt controller

Example:

interrupt-controller {
	compatible = "lsi,zevio-intc";
	interrupt-controller;
	reg = <0xDC000000 0x1000>;
	#interrupt-cells = <1>;
};

```
