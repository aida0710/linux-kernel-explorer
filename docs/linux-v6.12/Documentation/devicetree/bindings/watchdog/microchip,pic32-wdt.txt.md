---
sidebar_position: 38
---
# microchip,pic32-wdt.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/watchdog/microchip,pic32-wdt.txt`

### コンテンツ

```txt
* Microchip PIC32 Watchdog Timer

When enabled, the watchdog peripheral can be used to reset the device if the
WDT is not cleared periodically in software.

Required properties:
- compatible: must be "microchip,pic32mzda-wdt".
- reg: physical base address of the controller and length of memory mapped
  region.
- clocks: phandle of source clk. Should be <&rootclk LPRCCLK>.

Example:

	watchdog@1f800800 {
		compatible = "microchip,pic32mzda-wdt";
		reg = <0x1f800800 0x200>;
		clocks = <&rootclk LPRCCLK>;
	};

```
