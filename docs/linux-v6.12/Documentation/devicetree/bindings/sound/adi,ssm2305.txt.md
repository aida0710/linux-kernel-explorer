---
sidebar_position: 13
---
# adi,ssm2305.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/sound/adi,ssm2305.txt`

### コンテンツ

```txt
Analog Devices SSM2305 Speaker Amplifier
========================================

Required properties:
  - compatible : "adi,ssm2305"
  - shutdown-gpios : The gpio connected to the shutdown pin.
                     The gpio signal is ACTIVE_LOW.

Example:

ssm2305: analog-amplifier {
	compatible = "adi,ssm2305";
	shutdown-gpios = <&gpio3 20 GPIO_ACTIVE_LOW>;
};

```
