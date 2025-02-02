---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/atmel/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config WLAN_VENDOR_ATMEL
	bool "Atmel devices"
	default y
	help
	  If you have a wireless card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all the
	  questions about these cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if WLAN_VENDOR_ATMEL

config AT76C50X_USB
	tristate "Atmel at76c503/at76c505/at76c505a USB cards"
	depends on MAC80211 && USB
	select FW_LOADER
	help
	  Enable support for USB Wireless devices using Atmel at76c503,
	  at76c505 or at76c505a chips.

endif # WLAN_VENDOR_ATMEL

```
