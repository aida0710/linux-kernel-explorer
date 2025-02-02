---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/adaptec/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Adaptec network device configuration
#

config NET_VENDOR_ADAPTEC
	bool "Adaptec devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Adaptec cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_ADAPTEC

config ADAPTEC_STARFIRE
	tristate "Adaptec Starfire/DuraLAN support"
	depends on PCI
	select CRC32
	select MII
	help
	  Say Y here if you have an Adaptec Starfire (or DuraLAN) PCI network
	  adapter. The DuraLAN chip is used on the 64 bit PCI boards from
	  Adaptec e.g. the ANA-6922A. The older 32 bit boards use the tulip
	  driver.

	  To compile this driver as a module, choose M here: the module
	  will be called starfire.  This is recommended.

endif # NET_VENDOR_ADAPTEC

```
