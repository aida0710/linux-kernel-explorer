---
sidebar_position: 18
---
# Kconfig

### ファイル情報

- パス: `net/caif/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# CAIF net configurations
#

menuconfig CAIF
	tristate "CAIF support"
	select CRC_CCITT
	default n
	help
	The "Communication CPU to Application CPU Interface" (CAIF) is a packet
	based connection-oriented MUX protocol developed by ST-Ericsson for use
	with its modems. It is accessed from user space as sockets (PF_CAIF).

	Say Y (or M) here if you build for a phone product (e.g. Android or
	MeeGo) that uses CAIF as transport. If unsure say N.

	If you select to build it as module then CAIF_NETDEV also needs to be
	built as a module. You will also need to say Y (or M) to any CAIF
	physical devices that your platform requires.

	See Documentation/networking/caif for a further explanation on how to
	use and configure CAIF.

config  CAIF_DEBUG
	bool "Enable Debug"
	depends on CAIF
	default n
	help
	Enable the inclusion of debug code in the CAIF stack.
	Be aware that doing this will impact performance.
	If unsure say N.

config CAIF_NETDEV
	tristate "CAIF GPRS Network device"
	depends on CAIF
	default CAIF
	help
	Say Y if you will be using a CAIF based GPRS network device.
	This can be either built-in or a loadable module.
	If you select to build it as a built-in then the main CAIF device must
	also be a built-in.
	If unsure say Y.

config CAIF_USB
	tristate "CAIF USB support"
	depends on CAIF
	default n
	help
	Say Y if you are using CAIF over USB CDC NCM.
	This can be either built-in or a loadable module.
	If you select to build it as a built-in then the main CAIF device must
	also be a built-in.
	If unsure say N.

```
