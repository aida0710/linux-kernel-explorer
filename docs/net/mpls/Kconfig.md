---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `net/mpls/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# MPLS configuration
#

menuconfig MPLS
	bool "MultiProtocol Label Switching"
	default n
	help
	  MultiProtocol Label Switching routes packets through logical
	  circuits.  Originally conceived as a way of routing packets at
	  hardware speeds (before hardware was capable of routing ipv4 packets),
	  MPLS remains a simple way of making tunnels.

	  If you have not heard of MPLS you probably want to say N here.

if MPLS

config NET_MPLS_GSO
	tristate "MPLS: GSO support"
	help
	 This is helper module to allow segmentation of non-MPLS GSO packets
	 that have had MPLS stack entries pushed onto them and thus
	 become MPLS GSO packets.

config MPLS_ROUTING
	tristate "MPLS: routing support"
	depends on NET_IP_TUNNEL || NET_IP_TUNNEL=n
	depends on PROC_SYSCTL
	help
	 Add support for forwarding of mpls packets.

config MPLS_IPTUNNEL
	tristate "MPLS: IP over MPLS tunnel support"
	depends on LWTUNNEL && MPLS_ROUTING
	help
	 mpls ip tunnel support.

endif # MPLS

```
