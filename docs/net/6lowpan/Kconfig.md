---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `net/6lowpan/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menuconfig 6LOWPAN
	tristate "6LoWPAN Support"
	depends on IPV6
	help
	  This enables IPv6 over Low power Wireless Personal Area Network -
	  "6LoWPAN" which is supported by IEEE 802.15.4 or Bluetooth stacks.

config 6LOWPAN_DEBUGFS
	bool "6LoWPAN debugfs support"
	depends on 6LOWPAN
	depends on DEBUG_FS
	help
	  This enables 6LoWPAN debugfs support. For example to manipulate
	  IPHC context information at runtime.

menuconfig 6LOWPAN_NHC
	tristate "Next Header and Generic Header Compression Support"
	depends on 6LOWPAN
	default y
	help
	  Support for next header and generic header compression defined in
	  RFC6282 and RFC7400.

if 6LOWPAN_NHC

config 6LOWPAN_NHC_DEST
	tristate "Destination Options Header Support"
	default y
	help
	  6LoWPAN IPv6 Destination Options Header compression according to
	  RFC6282.

config 6LOWPAN_NHC_FRAGMENT
	tristate "Fragment Header Support"
	default y
	help
	  6LoWPAN IPv6 Fragment Header compression according to RFC6282.

config 6LOWPAN_NHC_HOP
	tristate "Hop-by-Hop Options Header Support"
	default y
	help
	  6LoWPAN IPv6 Hop-by-Hop Options Header compression according to
	  RFC6282.

config 6LOWPAN_NHC_IPV6
	tristate "IPv6 Header Support"
	default y
	help
	  6LoWPAN IPv6 Header compression according to RFC6282.

config 6LOWPAN_NHC_MOBILITY
	tristate "Mobility Header Support"
	default y
	help
	  6LoWPAN IPv6 Mobility Header compression according to RFC6282.

config 6LOWPAN_NHC_ROUTING
	tristate "Routing Header Support"
	default y
	help
	  6LoWPAN IPv6 Routing Header compression according to RFC6282.

config 6LOWPAN_NHC_UDP
	tristate "UDP Header Support"
	default y
	help
	  6LoWPAN IPv6 UDP Header compression according to RFC6282.

config 6LOWPAN_GHC_EXT_HDR_HOP
	tristate "GHC Hop-by-Hop Options Header Support"
	help
	  6LoWPAN IPv6 Hop-by-Hop option generic header compression according
	  to RFC7400.

config 6LOWPAN_GHC_UDP
	tristate "GHC UDP Support"
	help
	  6LoWPAN IPv6 UDP generic header compression according to RFC7400.

config 6LOWPAN_GHC_ICMPV6
	tristate "GHC ICMPv6 Support"
	help
	  6LoWPAN IPv6 ICMPv6 generic header compression according to RFC7400.

config 6LOWPAN_GHC_EXT_HDR_DEST
	tristate "GHC Destination Options Header Support"
	help
	  6LoWPAN IPv6 destination option generic header compression according
	  to RFC7400.

config 6LOWPAN_GHC_EXT_HDR_FRAG
	tristate "GHC Fragmentation Options Header Support"
	help
	  6LoWPAN IPv6 fragmentation option generic header compression
	  according to RFC7400.

config 6LOWPAN_GHC_EXT_HDR_ROUTE
	tristate "GHC Routing Options Header Support"
	help
	  6LoWPAN IPv6 routing option generic header compression according
	  to RFC7400.

endif

```
