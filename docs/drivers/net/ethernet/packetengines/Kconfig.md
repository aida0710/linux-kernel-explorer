---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/packetengines/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Packet Engines device configuration
#

config NET_VENDOR_PACKET_ENGINES
	bool "Packet Engines devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Packet Engines devices. If you say Y, you will
	  be asked for your specific card in the following questions.

if NET_VENDOR_PACKET_ENGINES

config HAMACHI
	tristate "Packet Engines Hamachi GNIC-II support"
	depends on PCI
	select MII
	help
	  If you have a Gigabit Ethernet card of this type, say Y here.

	  To compile this driver as a module, choose M here. The module will be
	  called hamachi.

config YELLOWFIN
	tristate "Packet Engines Yellowfin Gigabit-NIC support"
	depends on PCI
	select CRC32
	help
	  Say Y here if you have a Packet Engines G-NIC PCI Gigabit Ethernet
	  adapter or the SYM53C885 Ethernet controller. The Gigabit adapter is
	  used by the Beowulf Linux cluster project.  See
	  <http://cesdis.gsfc.nasa.gov/linux/drivers/yellowfin.html> for more
	  information about this driver in particular and Beowulf in general.

	  To compile this driver as a module, choose M here: the module
	  will be called yellowfin.  This is recommended.

endif # NET_VENDOR_PACKET_ENGINES

```
