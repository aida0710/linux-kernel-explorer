---
sidebar_position: 33
---
# jcore,pit.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/timer/jcore,pit.txt`

### コンテンツ

```txt
J-Core Programmable Interval Timer and Clocksource

Required properties:

- compatible: Must be "jcore,pit".

- reg: Memory region(s) for timer/clocksource registers. For SMP,
  there should be one region per cpu, indexed by the sequential,
  zero-based hardware cpu number.

- interrupts: An interrupt to assign for the timer. The actual pit
  core is integrated with the aic and allows the timer interrupt
  assignment to be programmed by software, but this property is
  required in order to reserve an interrupt number that doesn't
  conflict with other devices.


Example:

timer@200 {
	compatible = "jcore,pit";
	reg = < 0x200 0x30 0x500 0x30 >;
	interrupts = < 0x48 >;
};

```
