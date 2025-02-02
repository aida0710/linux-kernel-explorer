---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/sis/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Silicon Integrated Systems (SiS) device configuration
#

config NET_VENDOR_SIS
	bool "Silicon Integrated Systems (SiS) devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about SiS devices. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_SIS

config SIS900
	tristate "SiS 900/7016 PCI Fast Ethernet Adapter support"
	depends on PCI && HAS_IOPORT
	select CRC32
	select MII
	help
	  This is a driver for the Fast Ethernet PCI network cards based on
	  the SiS 900 and SiS 7016 chips. The SiS 900 core is also embedded in
	  SiS 630 and SiS 540 chipsets.

	  This driver also supports AMD 79C901 HomePNA so that you can use
	  your phone line as a network cable.

	  To compile this driver as a module, choose M here: the module
	  will be called sis900.  This is recommended.

config SIS190
	tristate "SiS190/SiS191 gigabit ethernet support"
	depends on PCI && HAS_IOPORT
	select CRC32
	select MII
	help
	  Say Y here if you have a SiS 190 PCI Fast Ethernet adapter or
	  a SiS 191 PCI Gigabit Ethernet adapter. Both are expected to
	  appear in lan on motherboard designs which are based on SiS 965
	  and SiS 966 south bridge.

	  To compile this driver as a module, choose M here: the module
	  will be called sis190.  This is recommended.

endif # NET_VENDOR_SIS

```
