---
sidebar_position: 10
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/ti/wl12xx/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config WL12XX
	tristate "TI wl12xx support"
	depends on MAC80211
	select WLCORE
	help
	  This module adds support for wireless adapters based on TI wl1271,
	  wl1273, wl1281 and wl1283 chipsets. This module does *not* include
	  support for wl1251.  For wl1251 support, use the separate homonymous
	  driver instead.

```
