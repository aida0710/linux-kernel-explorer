---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/netronome/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Netronome device configuration
#

config NET_VENDOR_NETRONOME
	bool "Netronome(R) devices"
	default y
	help
	  If you have a Netronome(R) network (Ethernet) card or device, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Netronome(R) cards. If you say Y, you will be
	  asked for your specific card in the following questions.

if NET_VENDOR_NETRONOME

config NFP
	tristate "Netronome(R) NFP4000/NFP6000 NIC driver"
	depends on PCI_MSI
	depends on VXLAN || VXLAN=n
	depends on TLS && TLS_DEVICE || TLS_DEVICE=n
	select NET_DEVLINK
	select CRC32
	select DIMLIB
	help
	  This driver supports the Netronome(R) NFP4000/NFP6000 based
	  cards working as a advanced Ethernet NIC.  It works with both
	  SR-IOV physical and virtual functions.

config NFP_APP_FLOWER
	bool "NFP4000/NFP6000 TC Flower offload support"
	depends on NFP
	depends on NET_SWITCHDEV
	depends on IPV6!=m || NFP=m
	default y
	help
	  Enable driver support for TC Flower offload on NFP4000 and NFP6000.
	  Say Y, if you are planning to make use of TC Flower offload
	  either directly, with Open vSwitch, or any other way.  Note that
	  TC Flower offload requires specific FW to work.

config NFP_APP_ABM_NIC
	bool "NFP4000/NFP6000 Advanced buffer management NIC support"
	depends on NFP
	depends on NET_SWITCHDEV
	default y
	help
	  Enable driver support for Advanced buffer management NIC on NFP.
	  ABM NIC allows advanced configuration of queuing and scheduling
	  of packets, including ECN marking. Say Y, if you are planning to
	  use one of the NFP4000 and NFP6000 platforms which support this
	  functionality.
	  Code will be built into the nfp.ko driver.

config NFP_NET_IPSEC
	bool "NFP IPsec crypto offload support"
	depends on NFP
	depends on XFRM_OFFLOAD
	default y
	help
	  Enable driver support IPsec crypto offload on NFP NIC.
	  Say Y, if you are planning to make use of IPsec crypto
	  offload. NOTE that IPsec crypto offload on NFP NIC
	  requires specific FW to work.

config NFP_DEBUG
	bool "Debug support for Netronome(R) NFP4000/NFP6000 NIC drivers"
	depends on NFP
	help
	  Enable extra sanity checks and debugfs support in
	  Netronome(R) NFP4000/NFP6000 NIC drivers.
	  Note: selecting this option may adversely impact
		performance.

endif

```
