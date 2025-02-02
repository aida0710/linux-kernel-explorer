---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `net/dcb/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config DCB
	bool "Data Center Bridging support"
	default n
	help
	  This enables support for configuring Data Center Bridging (DCB)
	  features on DCB capable Ethernet adapters via rtnetlink.  Say 'Y'
	  if you have a DCB capable Ethernet adapter which supports this
	  interface and you are connected to a DCB capable switch.

	  DCB is a collection of Ethernet enhancements which allow DCB capable
	  NICs and switches to support network traffic with differing
	  requirements (highly reliable, no drops vs. best effort vs. low
	  latency) to co-exist on Ethernet.

	  DCB features include:
	    Enhanced Transmission Selection (aka Priority Grouping) - provides a
	      framework for assigning bandwidth guarantees to traffic classes.
	    Priority-based Flow Control (PFC) - a MAC control pause frame which
	      works at the granularity of the 802.1p priority instead of the
	      link (802.3x).

	  If unsure, say N.

```
