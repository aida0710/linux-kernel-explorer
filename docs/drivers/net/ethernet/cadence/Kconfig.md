---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/cadence/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Cadence device configuration
#

config NET_VENDOR_CADENCE
	bool "Cadence devices"
	depends on HAS_IOMEM
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  If unsure, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all the
	  remaining Cadence network card questions. If you say Y, you will be
	  asked for your specific card in the following questions.

if NET_VENDOR_CADENCE

config MACB
	tristate "Cadence MACB/GEM support"
	depends on HAS_DMA && COMMON_CLK
	depends on PTP_1588_CLOCK_OPTIONAL
	select PHYLINK
	select CRC32
	help
	  The Cadence MACB ethernet interface is found on many Atmel AT32 and
	  AT91 parts.  This driver also supports the Cadence GEM (Gigabit
	  Ethernet MAC found in some ARM SoC devices).  Say Y to include
	  support for the MACB/GEM chip.

	  To compile this driver as a module, choose M here: the module
	  will be macb.

config MACB_USE_HWSTAMP
	bool "Use IEEE 1588 hwstamp"
	depends on MACB
	depends on PTP_1588_CLOCK
	default y
	help
	  Enable IEEE 1588 Precision Time Protocol (PTP) support for MACB.

config MACB_PCI
	tristate "Cadence PCI MACB/GEM support"
	depends on MACB && PCI
	help
	  This is PCI wrapper for MACB driver.

	  To compile this driver as a module, choose M here: the module
	  will be called macb_pci.

endif # NET_VENDOR_CADENCE

```
