---
sidebar_position: 122
---
# sky81452-regulator.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/regulator/sky81452-regulator.txt`

### コンテンツ

```txt
SKY81452 voltage regulator

Required properties:
- regulator node named lout.
- any required generic properties defined in regulator.txt

Optional properties:
- any available generic properties defined in regulator.txt

Example:

	regulator {
		lout {
			regulator-name = "sky81452-lout";
			regulator-min-microvolt = <4500000>;
			regulator-max-microvolt = <8000000>;
		};
	};

```
