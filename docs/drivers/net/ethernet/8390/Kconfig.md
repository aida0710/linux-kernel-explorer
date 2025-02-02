---
sidebar_position: 9
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/8390/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# 8390 device configuration
#

config NET_VENDOR_8390
	bool "National Semiconductor 8390 devices"
	default y
	depends on NET_VENDOR_NATSEMI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about National Semiconductor 8390 cards. If you say Y,
	  you will be asked for your specific card in the following questions.

if NET_VENDOR_8390

config PCMCIA_AXNET
	tristate "Asix AX88190 PCMCIA support"
	depends on PCMCIA && HAS_IOPORT
	help
	  Say Y here if you intend to attach an Asix AX88190-based PCMCIA
	  (PC-card) Fast Ethernet card to your computer.  These cards are
	  nearly NE2000 compatible but need a separate driver due to a few
	  misfeatures.

	  To compile this driver as a module, choose M here: the module will be
	  called axnet_cs.  If unsure, say N.

config AX88796
	tristate "ASIX AX88796 NE2000 clone support" if !ZORRO
	depends on (ARM || MIPS || SUPERH || ZORRO || COMPILE_TEST)
	select CRC32
	select PHYLIB
	select MDIO_BITBANG
	help
	  AX88796 driver, using platform bus to provide
	  chip detection and resources

config AX88796_93CX6
	bool "ASIX AX88796 external 93CX6 eeprom support"
	depends on AX88796
	select EEPROM_93CX6
	help
	  Select this if your platform comes with an external 93CX6 eeprom.

config XSURF100
	tristate "Amiga XSurf 100 AX88796/NE2000 clone support"
	depends on ZORRO
	select AX88796
	select AX88796B_PHY
	help
	  This driver is for the Individual Computers X-Surf 100 Ethernet
	  card (based on the Asix AX88796 chip). If you have such a card,
	  say Y. Otherwise, say N.

	  To compile this driver as a module, choose M here: the module
	  will be called xsurf100.

config HYDRA
	tristate "Hydra support"
	depends on ZORRO
	select CRC32
	help
	  If you have a Hydra Ethernet adapter, say Y. Otherwise, say N.

	  To compile this driver as a module, choose M here: the module
	  will be called hydra.

config ARM_ETHERH
	tristate "I-cubed EtherH/ANT EtherM support"
	depends on ARM && ARCH_ACORN
	select CRC32
	help
	  If you have an Acorn system with one of these network cards, you
	  should say Y to this option if you wish to use it with Linux.

config MAC8390
	tristate "Macintosh NS 8390 based ethernet cards"
	depends on MAC
	select CRC32
	help
	  If you want to include a driver to support Nubus or LC-PDS
	  Ethernet cards using an NS8390 chipset or its equivalent, say Y.

config MCF8390
	tristate "ColdFire NS8390 based Ethernet support"
	depends on COLDFIRE
	select CRC32
	help
	  This driver is for Ethernet devices using an NS8390-compatible
	  chipset on many common ColdFire CPU based boards. Many of the older
	  Freescale dev boards use this, and some other common boards like
	  some SnapGear routers do as well.

	  If you have one of these boards and want to use the network interface
	  on them then choose Y. To compile this driver as a module, choose M
	  here, the module will be called mcf8390.

config NE2000
	tristate "NE2000/NE1000 support"
	depends on (ISA || (Q40 && m) || MACH_TX49XX || ATARI_ETHERNEC)
	select NETDEV_LEGACY_INIT if ISA
	select CRC32
	help
	  If you have a network (Ethernet) card of this type, say Y here.
	  Many Ethernet cards without a specific driver are compatible with
	  the NE2000.

	  If you have a PCI NE2000 card however, say N here and Y to "PCI
	  NE2000 and clone support" below.

	  To compile this driver as a module, choose M here. The module
	  will be called ne.

config NE2K_PCI
	tristate "PCI NE2000 and clones support (see help)"
	depends on PCI && HAS_IOPORT
	select CRC32
	help
	  This driver is for NE2000 compatible PCI cards. It will not work
	  with ISA NE2000 cards (they have their own driver, "NE2000/NE1000
	  support" below). If you have a PCI NE2000 network (Ethernet) card,
	  say Y here.

	  This driver also works for the following NE2000 clone cards:
	  RealTek RTL-8029  Winbond 89C940  Compex RL2000  KTI ET32P2
	  NetVin NV5000SC   Via 86C926      SureCom NE34   Winbond
	  Holtek HT80232    Holtek HT80229

	  To compile this driver as a module, choose M here. The module
	  will be called ne2k-pci.

config APNE
	tristate "PCMCIA NE2000 support"
	depends on AMIGA_PCMCIA
	select CRC32
	help
	  If you have a PCMCIA NE2000 compatible adapter, say Y.  Otherwise,
	  say N.

	  To compile this driver as a module, choose M here: the module
	  will be called apne.

config PCMCIA_PCNET
	tristate "NE2000 compatible PCMCIA support"
	depends on PCMCIA && HAS_IOPORT
	select CRC32
	help
	  Say Y here if you intend to attach an NE2000 compatible PCMCIA
	  (PC-card) Ethernet or Fast Ethernet card to your computer.

	  To compile this driver as a module, choose M here: the module will be
	  called pcnet_cs.  If unsure, say N.

config STNIC
	tristate "National DP83902AV  support"
	depends on SUPERH
	select CRC32
	help
	  Support for cards based on the National Semiconductor DP83902AV
	  ST-NIC Serial Network Interface Controller for Twisted Pair.  This
	  is a 10Mbit/sec Ethernet controller.  Product overview and specs at
	  <http://www.national.com/pf/DP/DP83902A.html>.

	  If unsure, say N.

config ULTRA
	tristate "SMC Ultra support"
	depends on ISA
	select NETDEV_LEGACY_INIT
	select CRC32
	help
	  If you have a network (Ethernet) card of this type, say Y here.

	  Important: There have been many reports that, with some motherboards
	  mixing an SMC Ultra and an Adaptec AHA154x SCSI card (or compatible,
	  such as some BusLogic models) causes corruption problems with many
	  operating systems. The Linux smc-ultra driver has a work-around for
	  this but keep it in mind if you have such a SCSI card and have
	  problems.

	  To compile this driver as a module, choose M here. The module
	  will be called smc-ultra.

config WD80x3
	tristate "WD80*3 support"
	depends on ISA
	select NETDEV_LEGACY_INIT
	select CRC32
	help
	  If you have a network (Ethernet) card of this type, say Y here.

	  To compile this driver as a module, choose M here. The module
	  will be called wd.

config ZORRO8390
	tristate "Zorro NS8390-based Ethernet support"
	depends on ZORRO
	select CRC32
	help
	  This driver is for Zorro Ethernet cards using an NS8390-compatible
	  chipset, like the Village Tronic Ariadne II and the Individual
	  Computers X-Surf Ethernet cards. If you have such a card, say Y.
	  Otherwise, say N.

	  To compile this driver as a module, choose M here: the module
	  will be called zorro8390.

endif # NET_VENDOR_8390

```
