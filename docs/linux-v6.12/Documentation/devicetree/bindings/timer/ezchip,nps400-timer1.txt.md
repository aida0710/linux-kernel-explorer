---
sidebar_position: 23
---
# ezchip,nps400-timer1.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/timer/ezchip,nps400-timer1.txt`

### コンテンツ

```txt
NPS Network Processor

Required properties:

- compatible :	should be "ezchip,nps400-timer1"

Clocks required for compatible = "ezchip,nps400-timer1":
- clocks : Must contain a single entry describing the clock input

Example:

timer {
	compatible = "ezchip,nps400-timer1";
	clocks = <&sysclk>;
};

```
