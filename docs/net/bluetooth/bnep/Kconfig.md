---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `net/bluetooth/bnep/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config BT_BNEP
	tristate "BNEP protocol support"
	depends on BT_BREDR
	select CRC32
	help
	  BNEP (Bluetooth Network Encapsulation Protocol) is Ethernet
	  emulation layer on top of Bluetooth.  BNEP is required for
	  Bluetooth PAN (Personal Area Network).

	  Say Y here to compile BNEP support into the kernel or say M to
	  compile it as module (bnep).

config BT_BNEP_MC_FILTER
	bool "Multicast filter support"
	depends on BT_BNEP
	help
	  This option enables the multicast filter support for BNEP.

config BT_BNEP_PROTO_FILTER
	bool "Protocol filter support"
	depends on BT_BNEP
	help
	  This option enables the protocol filter support for BNEP.


```
