---
sidebar_position: 5
---
# marvell,feroceon-cache.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/cache/marvell,feroceon-cache.txt`

### コンテンツ

```txt
* Marvell Feroceon Cache

Required properties:
- compatible : Should be either "marvell,feroceon-cache" or
  	       "marvell,kirkwood-cache".

Optional properties:
- reg        : Address of the L2 cache control register. Mandatory for
  	       "marvell,kirkwood-cache", not used by "marvell,feroceon-cache"


Example:
		l2: l2-cache@20128 {
			compatible = "marvell,kirkwood-cache";
			reg = <0x20128 0x4>;
		};

```
