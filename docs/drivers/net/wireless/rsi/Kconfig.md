---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/rsi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config WLAN_VENDOR_RSI
	bool "Redpine Signals Inc devices"
	default y
	help
	  If you have a wireless card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all the
	  questions about these cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if WLAN_VENDOR_RSI

config RSI_91X
	tristate "Redpine Signals Inc 91x WLAN driver support"
	select BT_HCIRSI if RSI_COEX
	depends on MAC80211
	help
	  This option enabes support for RSI 1x1 devices.
	  Select M (recommended), if you have a RSI 1x1 wireless module.

config RSI_DEBUGFS
	bool "Redpine Signals Inc debug support"
	depends on RSI_91X
	default y
	help
	 Say Y, if you would like to enable debug support. This option
	 creates debugfs entries

config RSI_SDIO
	tristate "Redpine Signals SDIO bus support"
	depends on MMC && RSI_91X
	default m
	help
	  This option enables the SDIO bus support in rsi drivers.
	  Select M (recommended), if you have a RSI 1x1 wireless module.

config RSI_USB
	tristate "Redpine Signals USB bus support"
	depends on USB && RSI_91X
	default m
	help
	  This option enables the USB bus support in rsi drivers.
	  Select M (recommended), if you have a RSI 1x1 wireless module.

config RSI_COEX
	bool "Redpine Signals WLAN BT Coexistence support"
	depends on BT && RSI_91X
	depends on !(BT=m && RSI_91X=y)
	default y
	help
	  This option enables the WLAN BT coex support in rsi drivers.
	  Select M (recommended), if you have want to use this feature
	  and you have RS9113 module.

endif # WLAN_VENDOR_RSI

```
