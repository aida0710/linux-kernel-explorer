---
sidebar_position: 9
---
# armada-370-xp-pmsu.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/marvell/armada-370-xp-pmsu.txt`

### コンテンツ

```txt
Power Management Service Unit(PMSU)
-----------------------------------
Available on Marvell SOCs: Armada 370, Armada 38x and Armada XP

Required properties:

- compatible: should be one of:
  - "marvell,armada-370-pmsu" for Armada 370 or Armada XP
  - "marvell,armada-380-pmsu" for Armada 38x
  - "marvell,armada-370-xp-pmsu" was used for Armada 370/XP but is now
    deprecated and will be removed

- reg: Should contain PMSU registers location and length.

Example:

armada-370-xp-pmsu@22000 {
	compatible = "marvell,armada-370-pmsu";
	reg = <0x22000 0x1000>;
};


```
