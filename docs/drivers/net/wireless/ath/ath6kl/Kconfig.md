---
sidebar_position: 18
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/ath/ath6kl/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
config ATH6KL
	tristate "Atheros mobile chipsets support"
	depends on CFG80211
	help
	  This module adds core support for wireless adapters based on
	  Atheros AR6003 and AR6004 chipsets. You still need separate
	  bus drivers for USB and SDIO to be able to use real devices.

	  If you choose to build it as a module, it will be called
	  ath6kl_core. Please note that AR6002 and AR6001 are not
	  supported by this driver.

config ATH6KL_SDIO
	tristate "Atheros ath6kl SDIO support"
	depends on ATH6KL
	depends on MMC
	help
	  This module adds support for wireless adapters based on
	  Atheros AR6003 and AR6004 chipsets running over SDIO. If you
	  choose to build it as a module, it will be called ath6kl_sdio.
	  Please note that AR6002 and AR6001 are not supported by this
	  driver.

config ATH6KL_USB
	tristate "Atheros ath6kl USB support"
	depends on ATH6KL
	depends on USB
	help
	  This module adds support for wireless adapters based on
	  Atheros AR6004 chipset and chipsets based on it running over
	  USB. If you choose to build it as a module, it will be
	  called ath6kl_usb.

config ATH6KL_DEBUG
	bool "Atheros ath6kl debugging"
	depends on ATH6KL
	help
	  Enables ath6kl debug support, including debug messages
	  enabled with debug_mask module parameter and debugfs
	  interface.

	  If unsure, say Y to make it easier to debug problems.

config ATH6KL_TRACING
	bool "Atheros ath6kl tracing support"
	depends on ATH6KL
	depends on EVENT_TRACING
	help
	  Select this to ath6kl use tracing infrastructure which, for
	  example, can be enabled with help of trace-cmd. All debug
	  messages and commands are delivered to using individually
	  enablable trace points.

	  If unsure, say Y to make it easier to debug problems.

config ATH6KL_REGDOMAIN
	bool "Atheros ath6kl regdomain support"
	depends on ATH6KL
	depends on CFG80211_CERTIFICATION_ONUS
	help
	  Enabling this makes it possible to change the regdomain in
	  the firmware. This can be only enabled if regulatory requirements
	  are taken into account.

	  If unsure, say N.

```
