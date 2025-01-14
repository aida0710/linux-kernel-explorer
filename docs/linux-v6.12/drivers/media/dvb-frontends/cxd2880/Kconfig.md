---
sidebar_position: 30
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/dvb-frontends/cxd2880/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

config DVB_CXD2880
	tristate "Sony CXD2880 DVB-T2/T tuner + demodulator"
	depends on DVB_CORE && SPI
	default m if !MEDIA_SUBDRV_AUTOSELECT
	help
	  Say Y when you want to support this frontend.

```
