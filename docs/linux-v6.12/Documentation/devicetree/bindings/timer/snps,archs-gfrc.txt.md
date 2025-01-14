---
sidebar_position: 63
---
# snps,archs-gfrc.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/timer/snps,archs-gfrc.txt`

### コンテンツ

```txt
Synopsys ARC Free Running 64-bit Global Timer for ARC HS CPUs
- clocksource provider for SMP SoC

Required properties:

- compatible : should be "snps,archs-gfrc"
- clocks     : phandle to the source clock

Example:

	gfrc {
		compatible = "snps,archs-gfrc";
		clocks = <&core_clk>;
	};

```
