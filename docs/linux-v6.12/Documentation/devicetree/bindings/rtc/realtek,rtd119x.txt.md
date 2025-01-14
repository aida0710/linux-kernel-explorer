---
sidebar_position: 55
---
# realtek,rtd119x.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/rtc/realtek,rtd119x.txt`

### コンテンツ

```txt
Realtek RTD129x Real-Time Clock
===============================

Required properties:
- compatible :  Should be "realtek,rtd1295-rtc"
- reg        :  Specifies the physical base address and size
- clocks     :  Specifies the clock gate


Example:

	rtc@9801b600 {
		compatible = "realtek,rtd1295-clk";
		reg = <0x9801b600 0x100>;
		clocks = <&clkc RTD1295_CLK_EN_MISC_RTC>;
	};

```
