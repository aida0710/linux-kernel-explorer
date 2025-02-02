---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/sun/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Sun network device configuration
#

config NET_VENDOR_SUN
	bool "Sun devices"
	default y
	depends on SUN3 || SBUS || PCI || SUN_LDOMS
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Sun network interfaces. If you say Y, you will be
	  asked for your specific card in the following questions.

if NET_VENDOR_SUN

config HAPPYMEAL
	tristate "Sun Happy Meal 10/100baseT support"
	depends on (SBUS || PCI)
	select CRC32
	help
	  This driver supports the "hme" interface present on most Ultra
	  systems and as an option on older Sbus systems. This driver supports
	  both PCI and Sbus devices. This driver also supports the "qfe" quad
	  100baseT device available in both PCI and Sbus configurations.

	  To compile this driver as a module, choose M here: the module
	  will be called sunhme.

config SUNBMAC
	tristate "Sun BigMAC 10/100baseT support"
	depends on SBUS
	select CRC32
	help
	  This driver supports the "be" interface available as an Sbus option.
	  This is Sun's older 100baseT Ethernet device.

	  To compile this driver as a module, choose M here: the module
	  will be called sunbmac.

config SUNQE
	tristate "Sun QuadEthernet support"
	depends on SBUS
	select CRC32
	help
	  This driver supports the "qe" 10baseT Ethernet device, available as
	  an Sbus option. Note that this is not the same as Quad FastEthernet
	  "qfe" which is supported by the Happy Meal driver instead.

	  To compile this driver as a module, choose M here: the module
	  will be called sunqe.

config SUNGEM
	tristate "Sun GEM support"
	depends on PCI
	select CRC32
	select SUNGEM_PHY
	help
	  Support for the Sun GEM chip, aka Sun GigabitEthernet/P 2.0.  See also
	  <http://docs.oracle.com/cd/E19455-01/806-3985-10/806-3985-10.pdf>.

config CASSINI
	tristate "Sun Cassini support"
	depends on PCI
	select CRC32
	help
	  Support for the Sun Cassini chip, aka Sun GigaSwift Ethernet. See also
	  <http://docs.oracle.com/cd/E19113-01/giga.ether.pci/817-4341-10/817-4341-10.pdf>.

config SUNVNET_COMMON
	tristate "Common routines to support Sun Virtual Networking"
	depends on SUN_LDOMS
	depends on INET
	default m

config SUNVNET
	tristate "Sun Virtual Network support"
	default m
	depends on SUN_LDOMS
	depends on SUNVNET_COMMON
	help
	  Support for virtual network devices under Sun Logical Domains.

config LDMVSW
	tristate "Sun4v LDoms Virtual Switch support"
	default m
	depends on SUN_LDOMS
	depends on SUNVNET_COMMON
	help
	  Support for virtual switch devices under Sun4v Logical Domains.
	  This driver adds a network interface for every vsw-port node
	  found in the machine description of a service domain.
	  Linux bridge/switch software can use these interfaces for
	  guest domain network interconnectivity or guest domain
	  connection to a physical network on a service domain.

config NIU
	tristate "Sun Neptune 10Gbit Ethernet support"
	depends on PCI
	select CRC32
	help
	  This enables support for cards based upon Sun's
	  Neptune chipset.

endif # NET_VENDOR_SUN

```
