---
sidebar_position: 187
---
# mvebu-corediv-clock.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/clock/mvebu-corediv-clock.txt`

### コンテンツ

```txt
* Core Divider Clock bindings for Marvell MVEBU SoCs

The following is a list of provided IDs and clock names on Armada 370/XP:
 0 = nand (NAND clock)

Required properties:
- compatible : must be "marvell,armada-370-corediv-clock",
		       "marvell,armada-375-corediv-clock",
		       "marvell,armada-380-corediv-clock",
                       "marvell,mv98dx3236-corediv-clock",

- reg : must be the register address of Core Divider control register
- #clock-cells : from common clock binding; shall be set to 1
- clocks : must be set to the parent's phandle

Example:

corediv_clk: corediv-clocks@18740 {
	compatible = "marvell,armada-370-corediv-clock";
	reg = <0x18740 0xc>;
	#clock-cells = <1>;
	clocks = <&pll>;
};

```
