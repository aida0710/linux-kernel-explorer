---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `net/iucv/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config IUCV
	depends on S390
	def_tristate y if S390
	prompt "IUCV support (S390 - z/VM only)"
	help
	  Select this option if you want to use inter-user communication
	  under VM or VIF. If you run on z/VM, say "Y" to enable a fast
	  communication link between VM guests.

config AFIUCV
	depends on S390
	def_tristate m if QETH_L3 || IUCV
	prompt "AF_IUCV Socket support (S390 - z/VM and HiperSockets transport)"
	help
	  Select this option if you want to use AF_IUCV socket applications
	  based on z/VM inter-user communication vehicle or based on
	  HiperSockets.

```
