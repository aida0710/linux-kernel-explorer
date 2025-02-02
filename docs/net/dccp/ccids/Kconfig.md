---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `net/dccp/ccids/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menu "DCCP CCIDs Configuration"

config IP_DCCP_CCID2_DEBUG
	bool "CCID-2 debugging messages"
	help
	  Enable CCID-2 specific debugging messages.

	  The debugging output can additionally be toggled by setting the
	  ccid2_debug parameter to 0 or 1.

	  If in doubt, say N.

config IP_DCCP_CCID3
	bool "CCID-3 (TCP-Friendly)"
	default IP_DCCP = y || IP_DCCP = m
	help
	  CCID-3 denotes TCP-Friendly Rate Control (TFRC), an equation-based
	  rate-controlled congestion control mechanism.  TFRC is designed to
	  be reasonably fair when competing for bandwidth with TCP-like flows,
	  where a flow is "reasonably fair" if its sending rate is generally
	  within a factor of two of the sending rate of a TCP flow under the
	  same conditions.  However, TFRC has a much lower variation of
	  throughput over time compared with TCP, which makes CCID-3 more
	  suitable than CCID-2 for applications such streaming media where a
	  relatively smooth sending rate is of importance.

	  CCID-3 is further described in RFC 4342,
	  https://www.ietf.org/rfc/rfc4342.txt

	  The TFRC congestion control algorithms were initially described in
	  RFC 5348.

	  This text was extracted from RFC 4340 (sec. 10.2),
	  https://www.ietf.org/rfc/rfc4340.txt

	  If in doubt, say N.

config IP_DCCP_CCID3_DEBUG
	bool "CCID-3 debugging messages"
	depends on IP_DCCP_CCID3
	help
	  Enable CCID-3 specific debugging messages.

	  The debugging output can additionally be toggled by setting the
	  ccid3_debug parameter to 0 or 1.

	  If in doubt, say N.

config IP_DCCP_TFRC_LIB
	def_bool y if IP_DCCP_CCID3

config IP_DCCP_TFRC_DEBUG
	def_bool y if IP_DCCP_CCID3_DEBUG
endmenu

```
