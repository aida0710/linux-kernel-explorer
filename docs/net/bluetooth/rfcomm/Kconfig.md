---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `net/bluetooth/rfcomm/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config BT_RFCOMM
	tristate "RFCOMM protocol support"
	depends on BT_BREDR
	help
	  RFCOMM provides connection oriented stream transport.  RFCOMM
	  support is required for Dialup Networking, OBEX and other Bluetooth
	  applications.

	  Say Y here to compile RFCOMM support into the kernel or say M to
	  compile it as module (rfcomm).

config BT_RFCOMM_TTY
	bool "RFCOMM TTY support"
	depends on BT_RFCOMM
	depends on TTY
	help
	  This option enables TTY emulation support for RFCOMM channels.


```
