---
sidebar_position: 10
---
# arm_sbsa_uart.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/serial/arm_sbsa_uart.txt`

### コンテンツ

```txt
* ARM SBSA defined generic UART
This UART uses a subset of the PL011 registers and consequently lives
in the PL011 driver. It's baudrate and other communication parameters
cannot be adjusted at runtime, so it lacks a clock specifier here.

Required properties:
- compatible: must be "arm,sbsa-uart"
- reg: exactly one register range
- interrupts: exactly one interrupt specifier
- current-speed: the (fixed) baud rate set by the firmware

```
