---
sidebar_position: 22
---
# lpc1850-sct-pwm.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/pwm/lpc1850-sct-pwm.txt`

### コンテンツ

```txt
* NXP LPC18xx State Configurable Timer - Pulse Width Modulator driver

Required properties:
  - compatible: Should be "nxp,lpc1850-sct-pwm"
  - reg: Should contain physical base address and length of pwm registers.
  - clocks: Must contain an entry for each entry in clock-names.
    See ../clock/clock-bindings.txt for details.
  - clock-names: Must include the following entries.
    - pwm: PWM operating clock.
  - #pwm-cells: Should be 3. See pwm.yaml in this directory for the description
    of the cells format.

Example:
  pwm: pwm@40000000 {
    compatible = "nxp,lpc1850-sct-pwm";
    reg = <0x40000000 0x1000>;
    clocks =<&ccu1 CLK_CPU_SCT>;
    clock-names = "pwm";
    #pwm-cells = <3>;
  };

```
