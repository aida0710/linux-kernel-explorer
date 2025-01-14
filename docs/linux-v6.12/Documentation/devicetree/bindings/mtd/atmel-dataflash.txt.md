---
sidebar_position: 5
---
# atmel-dataflash.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/mtd/atmel-dataflash.txt`

### コンテンツ

```txt
* Atmel Data Flash

Required properties:
- compatible : "atmel,<model>", "atmel,<series>", "atmel,dataflash".

The device tree may optionally contain sub-nodes describing partitions of the
address space. See partition.txt for more detail.

Example:

flash@1 {
	#address-cells = <1>;
	#size-cells = <1>;
	compatible = "atmel,at45db321d", "atmel,at45", "atmel,dataflash";
	spi-max-frequency = <25000000>;
	reg = <1>;
};

```
