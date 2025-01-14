---
sidebar_position: 91
---
# spi-xtensa-xtfpga.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/spi/spi-xtensa-xtfpga.txt`

### コンテンツ

```txt
Cadence Xtensa XTFPGA platform SPI controller.

This simple SPI master controller is built into xtfpga bitstreams and is used
to control daughterboard audio codec.

Required properties:
- compatible: should be "cdns,xtfpga-spi".
- reg: physical base address of the controller and length of memory mapped
  region.

```
