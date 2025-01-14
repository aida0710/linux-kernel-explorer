---
sidebar_position: 12
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/ti/wl18xx/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config WL18XX
	tristate "TI wl18xx support"
	depends on MAC80211
	select WLCORE
	help
	  This module adds support for wireless adapters based on TI
	  WiLink 8 chipsets.

```
