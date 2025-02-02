---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wireless/zydas/zd1211rw/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config ZD1211RW
	tristate "ZyDAS ZD1211/ZD1211B USB-wireless support"
	depends on USB && MAC80211
	select FW_LOADER
	help
	  This is a driver for the ZyDAS ZD1211/ZD1211B wireless
	  chip, present in many USB-wireless adapters.

	  Device firmware is required alongside this driver. You can download
	  the firmware distribution from http://sf.net/projects/zd1211/files/

config ZD1211RW_DEBUG
	bool "ZyDAS ZD1211 debugging"
	depends on ZD1211RW
	help
	  ZD1211 debugging messages. Choosing Y will result in additional debug
	  messages being saved to your kernel logs, which may help debug any
	  problems.


```
