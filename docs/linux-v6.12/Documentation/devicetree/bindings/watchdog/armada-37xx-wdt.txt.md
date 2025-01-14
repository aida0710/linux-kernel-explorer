---
sidebar_position: 10
---
# armada-37xx-wdt.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/watchdog/armada-37xx-wdt.txt`

### コンテンツ

```txt
* Armada 37xx CPU Watchdog Timer Controller

Required properties:
- compatible : must be "marvell,armada-3700-wdt"
- reg : base physical address of the controller and length of memory mapped
	region.
- clocks : the clock feeding the watchdog timer. See clock-bindings.txt
- marvell,system-controller : reference to syscon node for the CPU Miscellaneous
	Registers

Example:

	cpu_misc: system-controller@d000 {
		compatible = "marvell,armada-3700-cpu-misc", "syscon";
		reg = <0xd000 0x1000>;
	};

	wdt: watchdog@8300 {
		compatible = "marvell,armada-3700-wdt";
		reg = <0x8300 0x40>;
		marvell,system-controller = <&cpu_misc>;
		clocks = <&xtalclk>;
	};

```
