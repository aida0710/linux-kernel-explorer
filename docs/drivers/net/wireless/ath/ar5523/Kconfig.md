---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/ath/ar5523/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
config AR5523
	tristate "Atheros AR5523 wireless driver support"
	depends on MAC80211 && USB
	select ATH_COMMON
	select FW_LOADER
	help
	  This module add support for AR5523 based USB dongles such as D-Link
	  DWL-G132, Netgear WPN111 and many more.

```
