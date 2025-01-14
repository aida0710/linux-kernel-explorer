---
sidebar_position: 51
---
# st,stmpe-pwm.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/pwm/st,stmpe-pwm.txt`

### コンテンツ

```txt
== ST STMPE PWM controller ==

This is a PWM block embedded in the ST Microelectronics STMPE
(ST Multi-Purpose Expander) chips. The PWM is registered as a
subdevices of the STMPE MFD device.

Required properties:
- compatible: should be:
  - "st,stmpe-pwm"
- #pwm-cells: should be 2. See pwm.yaml in this directory for a description of
  the cells format.

Example:

pwm0: pwm {
	compatible = "st,stmpe-pwm";
	#pwm-cells = <2>;
};

```
