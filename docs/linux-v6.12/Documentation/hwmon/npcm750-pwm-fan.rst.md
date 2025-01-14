---
sidebar_position: 161
---
# npcm750-pwm-fan.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/hwmon/npcm750-pwm-fan.rst`

### コンテンツ

```rst
Kernel driver npcm750-pwm-fan
=============================

Supported chips:

	NUVOTON NPCM750/730/715/705

Authors:

	<tomer.maimon@nuvoton.com>

Description:
------------
This driver implements support for NUVOTON NPCM7XX PWM and Fan Tacho
controller. The PWM controller supports up to 8 PWM outputs. The Fan tacho
controller supports up to 16 tachometer inputs.

The driver provides the following sensor accesses in sysfs:

=============== ======= =====================================================
fanX_input	ro	provide current fan rotation value in RPM as reported
			by the fan to the device.

pwmX		rw	get or set PWM fan control value. This is an integer
			value between 0(off) and 255(full speed).
=============== ======= =====================================================

```
