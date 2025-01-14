---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/siano/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Siano Mobile Silicon Digital TV device configuration
#

config SMS_USB_DRV
	tristate "Siano SMS1xxx based MDTV receiver"
	depends on DVB_CORE && HAS_DMA
	depends on !RC_CORE || RC_CORE
	select MEDIA_COMMON_OPTIONS
	select SMS_SIANO_MDTV
	help
	  Choose if you would like to have Siano's support for USB interface


```
