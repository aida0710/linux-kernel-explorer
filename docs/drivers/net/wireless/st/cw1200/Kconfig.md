---
sidebar_position: 13
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/st/cw1200/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CW1200
	tristate "CW1200 WLAN support"
	depends on MAC80211 && CFG80211
	help
	  This is a driver for the ST-E CW1100 & CW1200 WLAN chipsets.
	  This option just enables the driver core, see below for
	  specific bus support.

if CW1200

config CW1200_WLAN_SDIO
	tristate "Support SDIO platforms"
	depends on CW1200 && MMC
	help
	  Enable support for the CW1200 connected via an SDIO bus.
	  By default this driver only supports the Sagrad SG901-1091/1098 EVK
	  and similar designs that utilize a hardware reset circuit. To
	  support different CW1200 SDIO designs you will need to override
	  the default platform data by calling cw1200_sdio_set_platform_data()
	  in your board setup file.

config CW1200_WLAN_SPI
	tristate "Support SPI platforms"
	depends on CW1200 && SPI
	help
	  Enables support for the CW1200 connected via a SPI bus.  You will
	  need to add appropriate platform data glue in your board setup
	  file.

endif

```
