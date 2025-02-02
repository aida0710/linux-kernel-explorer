---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/pasemi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# PA Semi network device configuration
#

config NET_VENDOR_PASEMI
	bool "PA Semi devices"
	default y
	depends on PPC_PASEMI && PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about PA Semi cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_PASEMI

config PASEMI_MAC
	tristate "PA Semi 1/10Gbit MAC"
	depends on PPC_PASEMI && PCI
	select PHYLIB
	help
	  This driver supports the on-chip 1/10Gbit Ethernet controller on
	  PA Semi's PWRficient line of chips.

endif # NET_VENDOR_PASEMI

```
