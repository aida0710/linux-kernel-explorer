---
sidebar_position: 5
---
# armada-8kp.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/marvell/armada-8kp.txt`

### コンテンツ

```txt
Marvell Armada 8KPlus Platforms Device Tree Bindings
----------------------------------------------------

Boards using a SoC of the Marvell Armada 8KP families must carry
the following root node property:

 - compatible, with one of the following values:

   - "marvell,armada-8080", "marvell,armada-ap810-octa", "marvell,armada-ap810"
     when the SoC being used is the Armada 8080

Example:

compatible = "marvell,armada-8080-db", "marvell,armada-8080",
	     "marvell,armada-ap810-octa", "marvell,armada-ap810"

```
