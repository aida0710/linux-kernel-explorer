---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/apple/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Apple device configuration
#

config NET_VENDOR_APPLE
	bool "Apple devices"
	default y
	depends on (PPC_PMAC && PPC32) || MAC
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all the
	  questions about Apple devices. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_APPLE

config MACE
	tristate "MACE (Power Mac ethernet) support"
	depends on PPC_PMAC && PPC32
	select CRC32
	help
	  Power Macintoshes and clones with Ethernet built-in on the
	  motherboard will usually use a MACE (Medium Access Control for
	  Ethernet) interface. Say Y to include support for the MACE chip.

	  To compile this driver as a module, choose M here: the module
	  will be called mace.

config MACE_AAUI_PORT
	bool "Use AAUI port instead of TP by default"
	depends on MACE
	help
	  Some Apple machines (notably the Apple Network Server) which use the
	  MACE ethernet chip have an Apple AUI port (small 15-pin connector),
	  instead of an 8-pin RJ45 connector for twisted-pair ethernet.  Say
	  Y here if you have such a machine.  If unsure, say N.
	  The driver will default to AAUI on ANS anyway, and if you use it as
	  a module, you can provide the port_aaui=0|1 to force the driver.

config BMAC
	tristate "BMAC (G3 ethernet) support"
	depends on PPC_PMAC && PPC32
	select CRC32
	help
	  Say Y for support of BMAC Ethernet interfaces. These are used on G3
	  computers.

	  To compile this driver as a module, choose M here: the module
	  will be called bmac.

config MACMACE
	tristate "Macintosh (AV) onboard MACE ethernet"
	depends on MAC
	select CRC32
	help
	  Support for the onboard AMD 79C940 MACE Ethernet controller used in
	  the 660AV and 840AV Macintosh.  If you have one of these Macintoshes
	  say Y here.

endif # NET_VENDOR_APPLE

```
