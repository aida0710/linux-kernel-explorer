---
sidebar_position: 13
---
# armada-cpu-reset.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/marvell/armada-cpu-reset.txt`

### コンテンツ

```txt
Marvell Armada CPU reset controller
===================================

Required properties:

- compatible: Should be "marvell,armada-370-cpu-reset".

- reg: should be register base and length as documented in the
  datasheet for the CPU reset registers

cpurst: cpurst@20800 {
       compatible = "marvell,armada-370-cpu-reset";
       reg = <0x20800 0x20>;
};

```
