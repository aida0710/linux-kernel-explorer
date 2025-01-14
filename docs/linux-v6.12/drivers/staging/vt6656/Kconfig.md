---
sidebar_position: 9
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/vt6656/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config VT6656
	tristate "VIA Technologies VT6656 support"
	depends on MAC80211 && USB && WLAN && m
	select FW_LOADER
	help
	  This is a vendor-written driver for VIA VT6656.

```
