---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/dec/tulip/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Tulip family network device configuration
#

config NET_TULIP
	bool "DEC - Tulip devices"
	depends on (PCI || EISA || CARDBUS)
	help
	  This selects the "Tulip" family of EISA/PCI network cards.

if NET_TULIP

config DE2104X
	tristate "Early DECchip Tulip (dc2104x) PCI support"
	depends on PCI
	select CRC32
	help
	  This driver is developed for the SMC EtherPower series Ethernet
	  cards and also works with cards based on the DECchip
	  21040 (Tulip series) chips.  Some LinkSys PCI cards are
	  of this type.  (If your card is NOT SMC EtherPower 10/100 PCI
	  (smc9332dst), you can also try the driver for "Generic DECchip"
	  cards, below.  However, most people with a network card of this type
	  will say Y here.)

	  To compile this driver as a module, choose M here. The module will
	  be called de2104x.

config DE2104X_DSL
	int "Descriptor Skip Length in 32 bit longwords"
	depends on DE2104X
	range 0 31
	default 0
	help
	  Setting this value allows to align ring buffer descriptors into their
	  own cache lines. Value of 4 corresponds to the typical 32 byte line
	  (the descriptor is 16 bytes). This is necessary on systems that lack
	  cache coherence, an example is PowerMac 5500. Otherwise 0 is safe.
	  Default is 0, and range is 0 to 31.

config TULIP
	tristate "DECchip Tulip (dc2114x) PCI support"
	depends on PCI
	select CRC32
	help
	  This driver is developed for the SMC EtherPower series Ethernet
	  cards and also works with cards based on the DECchip 
	  21140 (Tulip series) chips.  Some LinkSys PCI cards are
	  of this type.  (If your card is NOT SMC EtherPower 10/100 PCI
	  (smc9332dst), you can also try the driver for "Generic DECchip"
	  cards, above.  However, most people with a network card of this type
	  will say Y here.)

	  To compile this driver as a module, choose M here. The module will
	  be called tulip.

config TULIP_MWI
	bool "New bus configuration"
	depends on TULIP
	help
	  This configures your Tulip card specifically for the card and
	  system cache line size type you are using.

	  This is experimental code, not yet tested on many boards.

	  If unsure, say N.

config TULIP_MMIO
	bool "Use PCI shared mem for NIC registers"
	depends on TULIP
	help
	  Use PCI shared memory for the NIC registers, rather than going through
	  the Tulip's PIO (programmed I/O ports).  Faster, but could produce
	  obscure bugs if your mainboard has memory controller timing issues.
	  If in doubt, say N.

config TULIP_NAPI
	bool "Use RX polling (NAPI)"
	depends on TULIP
	help
	  NAPI is a new driver API designed to reduce CPU and interrupt load
	  when the driver is receiving lots of packets from the card. It is
	  still somewhat experimental and thus not yet enabled by default.

	  If your estimated Rx load is 10kpps or more, or if the card will be
	  deployed on potentially unfriendly networks (e.g. in a firewall),
	  then say Y here.

	  If in doubt, say N.

config TULIP_NAPI_HW_MITIGATION
	bool "Use Interrupt Mitigation"
	depends on TULIP_NAPI
	help
	  Use HW to reduce RX interrupts. Not strictly necessary since NAPI
	  reduces RX interrupts by itself. Interrupt mitigation reduces RX
	  interrupts even at low levels of traffic at the cost of a small
	  latency.

	  If in doubt, say Y.

config TULIP_DM910X
	def_bool y
	depends on TULIP && SPARC

config WINBOND_840
	tristate "Winbond W89c840 Ethernet support"
	depends on PCI
	select CRC32
	select MII
	help
	  This driver is for the Winbond W89c840 chip.  It also works with 
	  the TX9882 chip on the Compex RL100-ATX board.
	  More specific information and updates are available from
	  <http://www.scyld.com/network/drivers.html>.

config DM9102
	tristate "Davicom DM910x/DM980x support"
	depends on PCI
	select CRC32
	help
	  This driver is for DM9102(A)/DM9132/DM9801 compatible PCI cards from
	  Davicom (<http://www.davicom.com.tw/>).  If you have such a network
	  (Ethernet) card, say Y.  Some information is contained in the file
	  <file:Documentation/networking/device_drivers/ethernet/dec/dmfe.rst>.

	  To compile this driver as a module, choose M here. The module will
	  be called dmfe.

config ULI526X
	tristate "ULi M526x controller support"
	depends on PCI
	select CRC32
	help
	  This driver is for ULi M5261/M5263 10/100M Ethernet Controller
	  (<http://www.nvidia.com/page/uli_drivers.html>).

	  To compile this driver as a module, choose M here. The module will
	  be called uli526x.
	  
config PCMCIA_XIRCOM
	tristate "Xircom CardBus support"
	depends on CARDBUS
	help
	  This driver is for the Digital "Tulip" Ethernet CardBus adapters.
	  It should work with most DEC 21*4*-based chips/ethercards, as well
	  as with work-alike chips from Lite-On (PNIC) and Macronix (MXIC) and
	  ASIX.

	  To compile this driver as a module, choose M here. The module will
	  be called xircom_cb.  If unsure, say N.

endif # NET_TULIP

```
