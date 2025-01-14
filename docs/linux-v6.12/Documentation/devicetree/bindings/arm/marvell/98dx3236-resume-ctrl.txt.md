---
sidebar_position: 1
---
# 98dx3236-resume-ctrl.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/arm/marvell/98dx3236-resume-ctrl.txt`

### コンテンツ

```txt
Resume Control
--------------
Available on Marvell SOCs: 98DX3336 and 98DX4251

Required properties:

- compatible: must be "marvell,98dx3336-resume-ctrl"

- reg: Should contain resume control registers location and length

Example:

resume@20980 {
	compatible = "marvell,98dx3336-resume-ctrl";
	reg = <0x20980 0x10>;
};

```
