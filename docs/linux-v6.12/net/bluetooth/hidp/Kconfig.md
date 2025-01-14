---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/net/bluetooth/hidp/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config BT_HIDP
	tristate "HIDP protocol support"
	depends on BT_BREDR && INPUT && HID_SUPPORT
	select HID
	help
	  HIDP (Human Interface Device Protocol) is a transport layer
	  for HID reports.  HIDP is required for the Bluetooth Human
	  Interface Device Profile.

	  Say Y here to compile HIDP support into the kernel or say M to
	  compile it as module (hidp).


```
