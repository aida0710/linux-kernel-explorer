---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `net/packet/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Packet configuration
#

config PACKET
	tristate "Packet socket"
	help
	  The Packet protocol is used by applications which communicate
	  directly with network devices without an intermediate network
	  protocol implemented in the kernel, e.g. tcpdump.  If you want them
	  to work, choose Y.

	  To compile this driver as a module, choose M here: the module will
	  be called af_packet.

	  If unsure, say Y.

config PACKET_DIAG
	tristate "Packet: sockets monitoring interface"
	depends on PACKET
	default n
	help
	  Support for PF_PACKET sockets monitoring interface used by the ss tool.
	  If unsure, say Y.

```
