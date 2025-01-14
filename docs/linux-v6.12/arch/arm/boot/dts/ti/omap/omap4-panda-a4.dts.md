---
sidebar_position: 253
---
# omap4-panda-a4.dts

### ファイル情報

- パス: `linux-v6.12/arch/arm/boot/dts/ti/omap/omap4-panda-a4.dts`

### コンテンツ

```dts
// SPDX-License-Identifier: GPL-2.0-only
/*
 * Copyright (C) 2012 Texas Instruments Incorporated - https://www.ti.com/
 */
/dts-v1/;

#include "omap443x.dtsi"
#include "omap4-panda-common.dtsi"

/* Pandaboard Rev A4+ have external pullups on SCL & SDA */
&dss_hdmi_pins {
	pinctrl-single,pins = <
		OMAP4_IOPAD(0x09a, PIN_INPUT | MUX_MODE0)		/* hdmi_cec.hdmi_cec */
		OMAP4_IOPAD(0x09c, PIN_INPUT | MUX_MODE0)		/* hdmi_scl.hdmi_scl */
		OMAP4_IOPAD(0x09e, PIN_INPUT | MUX_MODE0)		/* hdmi_sda.hdmi_sda */
		>;
};

```
