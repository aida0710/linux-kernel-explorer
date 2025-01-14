---
sidebar_position: 94
---
# spi_oc_tiny.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/spi/spi_oc_tiny.txt`

### コンテンツ

```txt
OpenCores tiny SPI

Required properties:
- compatible : should be "opencores,tiny-spi-rtlsvn2".
- gpios : should specify GPIOs used for chipselect.
Optional properties:
- clock-frequency : input clock frequency to the core.
- baud-width: width, in bits, of the programmable divider used to scale
	the input clock to SCLK.

The clock-frequency and baud-width properties are needed only if the divider
is programmable. They are not needed if the divider is fixed.

```
