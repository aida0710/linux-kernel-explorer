---
sidebar_position: 22
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/marvell/mwifiex/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MWIFIEX
	tristate "Marvell WiFi-Ex Driver"
	depends on CFG80211
	help
	  This adds support for wireless adapters based on Marvell
	  802.11n/ac chipsets.

	  If you choose to build it as a module, it will be called
	  mwifiex.

config MWIFIEX_SDIO
	tristate "Marvell WiFi-Ex Driver for SD8786/SD8787/SD8797/SD8887/SD8897/SD8977/SD8978/SD8987/SD8997"
	depends on MWIFIEX && MMC
	select FW_LOADER
	select WANT_DEV_COREDUMP
	help
	  This adds support for wireless adapters based on Marvell
	  8786/8787/8797/8887/8897/8977/8978/8987/8997 chipsets with
	  SDIO interface. SD8978 is also known as NXP IW416.

	  If you choose to build it as a module, it will be called
	  mwifiex_sdio.

config MWIFIEX_PCIE
	tristate "Marvell WiFi-Ex Driver for PCIE 8766/8897/8997"
	depends on MWIFIEX && PCI
	select FW_LOADER
	select WANT_DEV_COREDUMP
	help
	  This adds support for wireless adapters based on Marvell
	  8766/8897/8997 chipsets with PCIe interface.

	  If you choose to build it as a module, it will be called
	  mwifiex_pcie.

config MWIFIEX_USB
	tristate "Marvell WiFi-Ex Driver for USB8766/8797/8997"
	depends on MWIFIEX && USB
	select FW_LOADER
	help
	  This adds support for wireless adapters based on Marvell
	  8797/8997 chipset with USB interface.

	  If you choose to build it as a module, it will be called
	  mwifiex_usb.

```
