---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/cec/usb/pulse8/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config USB_PULSE8_CEC
	tristate "Pulse Eight HDMI CEC"
	select CEC_CORE
	select USB
	select USB_ACM
	select SERIO
	select SERIO_SERPORT
	help
	  This is a cec driver for the Pulse Eight HDMI CEC device.

	  To compile this driver as a module, choose M here: the
	  module will be called pulse8-cec.

```
