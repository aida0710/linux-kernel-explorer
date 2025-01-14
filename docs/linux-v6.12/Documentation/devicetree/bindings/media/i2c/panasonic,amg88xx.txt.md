---
sidebar_position: 60
---
# panasonic,amg88xx.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/media/i2c/panasonic,amg88xx.txt`

### コンテンツ

```txt
* Panasonic AMG88xx

The Panasonic family of AMG88xx Grid-Eye sensors allow recording
8x8 10Hz video which consists of thermal datapoints

Required Properties:
 - compatible : Must be "panasonic,amg88xx"
 - reg : i2c address of the device

Example:

	i2c0@1c22000 {
		...
		amg88xx@69 {
			compatible = "panasonic,amg88xx";
			reg = <0x69>;
		};
		...
	};

```
