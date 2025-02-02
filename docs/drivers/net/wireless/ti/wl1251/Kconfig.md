---
sidebar_position: 15
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/ti/wl1251/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config WL1251
	tristate "TI wl1251 driver support"
	depends on MAC80211
	select FW_LOADER
	select CRC7
	help
	  This will enable TI wl1251 driver support. The drivers make
	  use of the mac80211 stack.

	  If you choose to build a module, it'll be called wl1251. Say
	  N if unsure.

config WL1251_SPI
	tristate "TI wl1251 SPI support"
	depends on WL1251 && SPI_MASTER
	help
	  This module adds support for the SPI interface of adapters using
	  TI wl1251 chipset.  Select this if your platform is using
	  the SPI bus.

	  If you choose to build a module, it'll be called wl1251_spi.
	  Say N if unsure.

config WL1251_SDIO
	tristate "TI wl1251 SDIO support"
	depends on WL1251 && MMC
	help
	  This module adds support for the SDIO interface of adapters using
	  TI wl1251 chipset.  Select this if your platform is using
	  the SDIO bus.

	  If you choose to build a module, it'll be called
	  wl1251_sdio. Say N if unsure.

```
