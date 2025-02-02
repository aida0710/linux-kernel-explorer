---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/marvell/libertas_tf/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config LIBERTAS_THINFIRM
	tristate "Marvell 8xxx Libertas WLAN driver support with thin firmware"
	depends on MAC80211
	select FW_LOADER
	help
	  A library for Marvell Libertas 8xxx devices using thinfirm.

config LIBERTAS_THINFIRM_DEBUG
	bool "Enable full debugging output in the Libertas thin firmware module."
	depends on LIBERTAS_THINFIRM
	help
	  Debugging support.

config LIBERTAS_THINFIRM_USB
	tristate "Marvell Libertas 8388 USB 802.11b/g cards with thin firmware"
	depends on LIBERTAS_THINFIRM && USB
	help
	  A driver for Marvell Libertas 8388 USB devices using thinfirm.

```
