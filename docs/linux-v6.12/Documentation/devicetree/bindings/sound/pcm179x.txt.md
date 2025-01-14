---
sidebar_position: 261
---
# pcm179x.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/sound/pcm179x.txt`

### コンテンツ

```txt
Texas Instruments pcm179x DT bindings

This driver supports both the I2C and SPI bus.

Required properties:

 - compatible: "ti,pcm1792a"

For required properties on SPI, please consult
Documentation/devicetree/bindings/spi/spi-bus.txt

Required properties on I2C:

 - reg: the I2C address


Examples:

	codec_spi: 1792a@0 {
		compatible = "ti,pcm1792a";
		spi-max-frequency = <600000>;
	};

	codec_i2c: 1792a@4c {
		compatible = "ti,pcm1792a";
		reg = <0x4c>;
	};

```
