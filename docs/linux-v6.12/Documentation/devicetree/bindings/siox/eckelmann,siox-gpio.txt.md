---
sidebar_position: 1
---
# eckelmann,siox-gpio.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/siox/eckelmann,siox-gpio.txt`

### コンテンツ

```txt
Eckelmann SIOX GPIO bus

Required properties:
- compatible : "eckelmann,siox-gpio"
- din-gpios, dout-gpios, dclk-gpios, dld-gpios: references gpios for the
    corresponding bus signals.

Examples:

        siox {
                compatible = "eckelmann,siox-gpio";
                pinctrl-names = "default";
                pinctrl-0 = <&pinctrl_siox>;

                din-gpios = <&gpio6 11 0>;
                dout-gpios = <&gpio6 8 0>;
                dclk-gpios = <&gpio6 9 0>;
                dld-gpios = <&gpio6 10 0>;
        };

```
