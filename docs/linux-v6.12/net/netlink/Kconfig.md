---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/net/netlink/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Netlink Sockets
#

config NETLINK_DIAG
	tristate "NETLINK: socket monitoring interface"
	default n
	help
	  Support for NETLINK socket monitoring interface used by the ss tool.
	  If unsure, say Y.

```
