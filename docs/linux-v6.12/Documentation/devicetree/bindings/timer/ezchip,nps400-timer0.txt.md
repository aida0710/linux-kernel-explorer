---
sidebar_position: 22
---
# ezchip,nps400-timer0.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/timer/ezchip,nps400-timer0.txt`

### コンテンツ

```txt
NPS Network Processor

Required properties:

- compatible :	should be "ezchip,nps400-timer0"

Clocks required for compatible = "ezchip,nps400-timer0":
- interrupts : The interrupt of the first timer
- clocks : Must contain a single entry describing the clock input

Example:

timer {
	compatible = "ezchip,nps400-timer0";
	interrupts = <3>;
	clocks = <&sysclk>;
};

```
