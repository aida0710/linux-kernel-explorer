---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `net/bluetooth/cmtp/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config BT_CMTP
	tristate "CMTP protocol support (DEPRECATED)"
	depends on BT_BREDR && ISDN_CAPI && DEPRECATED
	help
	  CMTP (CAPI Message Transport Protocol) is a transport layer
	  for CAPI messages.  CMTP is required for the Bluetooth Common
	  ISDN Access Profile.

	  Say Y here to compile CMTP support into the kernel or say M to
	  compile it as module (cmtp).


```
