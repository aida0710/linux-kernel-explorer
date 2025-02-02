---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/tehuti/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Tehuti network device configuration
#

config NET_VENDOR_TEHUTI
	bool "Tehuti devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Tehuti cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_TEHUTI

config TEHUTI
	tristate "Tehuti Networks 10G Ethernet"
	depends on PCI
	help
	  Tehuti Networks 10G Ethernet NIC

config TEHUTI_TN40
	tristate "Tehuti Networks TN40xx 10G Ethernet adapters"
	depends on PCI
	select PAGE_POOL
	select FW_LOADER
	select PHYLINK
	help
	  This driver supports 10G Ethernet adapters using Tehuti Networks
	  TN40xx chips. Currently, adapters with Applied Micro Circuits
	  Corporation QT2025 are supported; Tehuti Networks TN9310,
	  DLink DXE-810S, ASUS XG-C100F, and Edimax EN-9320.

	  To compile this driver as a module, choose M here: the module
	  will be called tn40xx.

endif # NET_VENDOR_TEHUTI

```
