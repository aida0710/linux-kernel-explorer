---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/ti/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config WLAN_VENDOR_TI
	bool "Texas Instrument devices"
	default y
	help
	  If you have a wireless card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all the
	  questions about these cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if WLAN_VENDOR_TI
source "drivers/net/wireless/ti/wl1251/Kconfig"
source "drivers/net/wireless/ti/wl12xx/Kconfig"
source "drivers/net/wireless/ti/wl18xx/Kconfig"

# keep last for automatic dependencies
source "drivers/net/wireless/ti/wlcore/Kconfig"

endif # WLAN_VENDOR_TI

```
