---
sidebar_position: 4
---
# altr,timer-1.0.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/timer/altr,timer-1.0.txt`

### コンテンツ

```txt
Altera Timer

Required properties:

- compatible : should be "altr,timer-1.0"
- reg : Specifies base physical address and size of the registers.
- interrupts : Should contain the timer interrupt number
- clock-frequency : The frequency of the clock that drives the counter, in Hz.

Example:

timer {
	compatible = "altr,timer-1.0";
	reg = <0x00400000 0x00000020>;
	interrupt-parent = <&cpu>;
	interrupts = <11>;
	clock-frequency = <125000000>;
};

```
