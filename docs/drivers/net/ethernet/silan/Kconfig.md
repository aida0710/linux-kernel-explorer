---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/silan/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Silan device configuration
#

config NET_VENDOR_SILAN
	bool "Silan devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Silan devices. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_SILAN

config SC92031
	tristate "Silan SC92031 PCI Fast Ethernet Adapter driver"
	depends on PCI
	select CRC32
	help
	  This is a driver for the Fast Ethernet PCI network cards based on
	  the Silan SC92031 chip (sometimes also called Rsltek 8139D). If you
	  have one of these, say Y here.

	  To compile this driver as a module, choose M here: the module
	  will be called sc92031.  This is recommended.

endif # NET_VENDOR_SILAN

```
