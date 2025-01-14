---
sidebar_position: 7
---
# hisi-rng.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/rng/hisi-rng.txt`

### コンテンツ

```txt
Hisilicon Random Number Generator

Required properties:
- compatible : Should be "hisilicon,hip04-rng" or "hisilicon,hip05-rng"
- reg : Offset and length of the register set of this block

Example:

rng@d1010000 {
	compatible = "hisilicon,hip05-rng";
	reg = <0xd1010000 0x100>;
};

```
