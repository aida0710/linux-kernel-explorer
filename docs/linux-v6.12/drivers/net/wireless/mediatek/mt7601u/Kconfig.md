---
sidebar_position: 10
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/mediatek/mt7601u/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MT7601U
	tristate "MediaTek MT7601U (USB) support"
	depends on MAC80211
	depends on USB
	help
	  This adds support for MT7601U-based USB wireless dongles.

```
