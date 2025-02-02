---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/via/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# VIA device configuration
#

config NET_VENDOR_VIA
	bool "VIA devices"
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about VIA devices. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_VIA

config VIA_RHINE
	tristate "VIA Rhine support"
	depends on PCI || (OF_IRQ && GENERIC_PCI_IOMAP)
	depends on PCI || ARCH_VT8500 || COMPILE_TEST
	depends on HAS_IOPORT
	depends on HAS_DMA
	select CRC32
	select MII
	help
	  If you have a VIA "Rhine" based network card (Rhine-I (VT86C100A),
	  Rhine-II (VT6102), or Rhine-III (VT6105)), say Y here. Rhine-type
	  Ethernet functions can also be found integrated on South Bridges
	  (e.g. VT8235).

	  To compile this driver as a module, choose M here. The module
	  will be called via-rhine.

config VIA_RHINE_MMIO
	bool "Use MMIO instead of PIO"
	depends on VIA_RHINE
	help
	  This instructs the driver to use PCI shared memory (MMIO) instead of
	  programmed I/O ports (PIO). Enabling this gives an improvement in
	  processing time in parts of the driver.

	  If unsure, say Y.

config VIA_VELOCITY
	tristate "VIA Velocity support"
	depends on (PCI || (OF_ADDRESS && OF_IRQ))
	depends on HAS_DMA
	select CRC32
	select CRC_CCITT
	select MII
	help
	  If you have a VIA "Velocity" based network card say Y here.

	  To compile this driver as a module, choose M here. The module
	  will be called via-velocity.

endif # NET_VENDOR_VIA

```
