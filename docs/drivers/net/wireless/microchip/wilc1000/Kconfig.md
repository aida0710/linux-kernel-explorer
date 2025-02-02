---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/microchip/wilc1000/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config WILC1000
	tristate
	help
	  Add support for the Atmel WILC1000 802.11 b/g/n SoC.
	  This provides Wi-FI over an SDIO or SPI interface, and
	  is usually found in IoT devices.

	  This module only support IEEE 802.11n WiFi.

config WILC1000_SDIO
	tristate "Atmel WILC1000 SDIO (WiFi only)"
	depends on CFG80211 && INET && MMC
	select WILC1000
	help
	  This module adds support for the SDIO interface of adapters using
	  WILC1000 chipset. The Atmel WILC1000 SDIO is a full speed interface.
	  It meets SDIO card specification version 2.0. The interface supports
	  the 1-bit/4-bit SD transfer mode at the clock range of 0-50 MHz.
	  The host can use this interface to read and write from any register
	  within the chip as well as configure the WILC1000 for data DMA.
	  To use this interface, pin9 (SDIO_SPI_CFG) must be grounded. Select
	  this if your platform is using the SDIO bus.

config WILC1000_SPI
	tristate "Atmel WILC1000 SPI (WiFi only)"
	depends on CFG80211 && INET && SPI
	select WILC1000
	select CRC7
	select CRC_ITU_T
	help
	  This module adds support for the SPI interface of adapters using
	  WILC1000 chipset. The Atmel WILC1000 has a Serial Peripheral
	  Interface (SPI) that operates as a SPI slave. This SPI interface can
	  be used for control and for serial I/O of 802.11 data. The SPI is a
	  full-duplex slave synchronous serial interface that is available
	  immediately following reset when pin 9 (SDIO_SPI_CFG) is tied to
	  VDDIO. Select this if your platform is using the SPI bus.

config WILC1000_HW_OOB_INTR
	bool "WILC1000 out of band interrupt"
	depends on WILC1000_SDIO
	help
	  This option enables out-of-band interrupt support for the WILC1000
	  chipset. This OOB interrupt is intended to provide a faster interrupt
	  mechanism for SDIO host controllers that don't support SDIO interrupt.
	  Select this option If the SDIO host controller in your platform
	  doesn't support SDIO time division interrupt.

```
