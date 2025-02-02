---
sidebar_position: 13
---
# Kconfig

### ファイル情報

- パス: `net/dccp/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menuconfig IP_DCCP
	tristate "The DCCP Protocol"
	depends on INET
	help
	  Datagram Congestion Control Protocol (RFC 4340)

	  From https://www.ietf.org/rfc/rfc4340.txt:

	  The Datagram Congestion Control Protocol (DCCP) is a transport
	  protocol that implements bidirectional, unicast connections of
	  congestion-controlled, unreliable datagrams. It should be suitable
	  for use by applications such as streaming media, Internet telephony,
	  and on-line games.

	  To compile this protocol support as a module, choose M here: the
	  module will be called dccp.

	  If in doubt, say N.

if IP_DCCP

config INET_DCCP_DIAG
	depends on INET_DIAG
	def_tristate y if (IP_DCCP = y && INET_DIAG = y)
	def_tristate m

source "net/dccp/ccids/Kconfig"

menu "DCCP Kernel Hacking"
	depends on DEBUG_KERNEL=y

config IP_DCCP_DEBUG
	bool "DCCP debug messages"
	help
	  Only use this if you're hacking DCCP.

	  When compiling DCCP as a module, this debugging output can be toggled
	  by setting the parameter dccp_debug of the `dccp' module to 0 or 1.

	  Just say N.


endmenu

endif # IP_DDCP

```
