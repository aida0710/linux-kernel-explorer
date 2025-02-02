---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/sgi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# SGI device configuration
#

config NET_VENDOR_SGI
	bool "SGI devices"
	default y
	depends on (PCI && SGI_MFD_IOC3) ||  SGI_IP32
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about SGI devices. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_SGI

config SGI_IOC3_ETH
	bool "SGI IOC3 Ethernet"
	depends on PCI && SGI_MFD_IOC3
	select CRC16
	select CRC32
	select MII
	help
	  If you have a network (Ethernet) card of this type, say Y here.

config SGI_O2MACE_ETH
	tristate "SGI O2 MACE Fast Ethernet support"
	depends on SGI_IP32=y

endif # NET_VENDOR_SGI

```
