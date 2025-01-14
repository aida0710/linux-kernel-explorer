---
sidebar_position: 12
---
# armada-380-mpcore-soc-ctrl.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/marvell/armada-380-mpcore-soc-ctrl.txt`

### コンテンツ

```txt
Marvell Armada 38x CA9 MPcore SoC Controller
============================================

Required properties:

- compatible: Should be "marvell,armada-380-mpcore-soc-ctrl".

- reg: should be the register base and length as documented in the
  datasheet for the CA9 MPcore SoC Control registers

mpcore-soc-ctrl@20d20 {
	compatible = "marvell,armada-380-mpcore-soc-ctrl";
	reg = <0x20d20 0x6c>;
};

```
