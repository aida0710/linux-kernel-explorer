---
sidebar_position: 54
---
# ti,twl-pwm.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/pwm/ti,twl-pwm.txt`

### コンテンツ

```txt
Texas Instruments TWL series PWM drivers

Supported PWMs:
On TWL4030 series: PWM1 and PWM2
On TWL6030 series: PWM0 and PWM1

Required properties:
- compatible: "ti,twl4030-pwm" or "ti,twl6030-pwm"
- #pwm-cells: should be 2. See pwm.yaml in this directory for a description of
  the cells format.

Example:

twl_pwm: pwm {
	compatible = "ti,twl6030-pwm";
	#pwm-cells = <2>;
};

```
