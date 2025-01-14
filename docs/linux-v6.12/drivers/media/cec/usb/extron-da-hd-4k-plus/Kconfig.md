---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/cec/usb/extron-da-hd-4k-plus/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config USB_EXTRON_DA_HD_4K_PLUS_CEC
	tristate "Extron DA HD 4K Plus CEC driver"
	depends on VIDEO_DEV
	depends on USB
	depends on USB_ACM
	select CEC_CORE
	select SERIO
	select SERIO_SERPORT
	help
	  This is a CEC driver for the Extron DA HD 4K Plus HDMI Splitter.

	  To compile this driver as a module, choose M here: the
	  module will be called extron-da-hd-4k-plus-cec.

```
