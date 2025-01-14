---
sidebar_position: 111
---
# technologic,ts4800.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/interrupt-controller/technologic,ts4800.txt`

### コンテンツ

```txt
TS-4800 FPGA interrupt controller

TS-4800 FPGA has an internal interrupt controller. When one of the
interrupts is triggered, the SoC is notified, usually using a GPIO as
parent interrupt source.

Required properties:
- compatible: should be "technologic,ts4800-irqc"
- interrupt-controller: identifies the node as an interrupt controller
- reg: physical base address of the controller and length of memory mapped
  region
- #interrupt-cells: specifies the number of cells needed to encode an interrupt
  source, should be 1.
- interrupts: specifies the interrupt line in the interrupt-parent controller

```
