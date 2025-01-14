---
sidebar_position: 14
---
# img-pwm.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/pwm/img-pwm.txt`

### コンテンツ

```txt
*Imagination Technologies PWM DAC driver

Required properties:
  - compatible: Should be "img,pistachio-pwm"
  - reg: Should contain physical base address and length of pwm registers.
  - clocks: Must contain an entry for each entry in clock-names.
	See ../clock/clock-bindings.txt for details.
  - clock-names: Must include the following entries.
    - pwm: PWM operating clock.
    - sys: PWM system interface clock.
  - #pwm-cells: Should be 2. See pwm.yaml in this directory for the
	description of the cells format.
  - img,cr-periph: Must contain a phandle to the peripheral control
	syscon node which contains PWM control registers.

Example:
	pwm: pwm@18101300 {
		compatible = "img,pistachio-pwm";
		reg = <0x18101300 0x100>;
		clocks = <&pwm_clk>, <&system_clk>;
		clock-names = "pwm", "sys";
		#pwm-cells = <2>;
		img,cr-periph = <&cr_periph>;
	};

```
