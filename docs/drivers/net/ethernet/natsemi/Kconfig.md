---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/natsemi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# National Semiconductor device configuration
#

config NET_VENDOR_NATSEMI
	bool "National Semiconductor devices"
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about National Semiconductor devices. If you say Y,
	  you will be asked for your specific card in the following questions.

if NET_VENDOR_NATSEMI

config MACSONIC
	tristate "Macintosh SONIC based ethernet (onboard, NuBus, LC, CS)"
	depends on MAC
	help
	  Support for NatSemi SONIC based Ethernet devices.  This includes
	  the onboard Ethernet in many Quadras as well as some LC-PDS,
	  a few Nubus and all known Comm Slot Ethernet cards.  If you have
	  one of these say Y here.

	  To compile this driver as a module, choose M here. This module will
	  be called macsonic.

config MIPS_JAZZ_SONIC
	tristate "MIPS JAZZ onboard SONIC Ethernet support"
	depends on MACH_JAZZ
	help
	  This is the driver for the onboard card of MIPS Magnum 4000,
	  Acer PICA, Olivetti M700-10 and a few other identical OEM systems.

config NATSEMI
	tristate "National Semiconductor DP8381x series PCI Ethernet support"
	depends on PCI
	select CRC32
	help
	  This driver is for the National Semiconductor DP83810 series,
	  which is used in cards from PureData, NetGear, Linksys
	  and others, including the 83815 chip.
	  More specific information and updates are available from
	  <http://www.scyld.com/network/natsemi.html>.

config NS83820
	tristate "National Semiconductor DP83820 support"
	depends on PCI
	help
	  This is a driver for the National Semiconductor DP83820 series
	  of gigabit ethernet MACs.  Cards using this chipset include
	  the D-Link DGE-500T, PureData's PDP8023Z-TG, SMC's SMC9462TX,
	  SOHO-GA2000T, SOHO-GA2500T.  The driver supports the use of
	  zero copy.

config XTENSA_XT2000_SONIC
	tristate "Xtensa XT2000 onboard SONIC Ethernet support"
	depends on XTENSA_PLATFORM_XT2000
	help
	  This is the driver for the onboard card of the Xtensa XT2000 board.

endif # NET_VENDOR_NATSEMI

```
