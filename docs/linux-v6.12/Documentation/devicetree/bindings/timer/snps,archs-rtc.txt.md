---
sidebar_position: 64
---
# snps,archs-rtc.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/timer/snps,archs-rtc.txt`

### コンテンツ

```txt
Synopsys ARC Free Running 64-bit Local Timer for ARC HS CPUs
- clocksource provider for UP SoC

Required properties:

- compatible : should be "snps,archs-rtc"
- clocks     : phandle to the source clock

Example:

	rtc {
		compatible = "snps,arc-rtc";
		clocks = <&core_clk>;
	};

```
