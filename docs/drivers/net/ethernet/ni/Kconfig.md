---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/ni/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# National Instruments network device configuration
#

config NET_VENDOR_NI
	bool "National Instruments Devices"
	default y
	help
	  If you have a network (Ethernet) device belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about National Instruments devices.
	  If you say Y, you will be asked for your specific device in the
	  following questions.

if NET_VENDOR_NI

config NI_XGE_MANAGEMENT_ENET
	tristate "National Instruments XGE management enet support"
	depends on HAS_IOMEM && HAS_DMA
	select PHYLIB
	select OF_MDIO if OF
	help
	  Simple LAN device for debug or management purposes. Can
	  support either 10G or 1G PHYs via SFP+ ports.

endif

```
