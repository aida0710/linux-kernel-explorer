---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/rdc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# RDC network device configuration
#

config NET_VENDOR_RDC
	bool "RDC devices"
	default y
	depends on PCI
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about RDC cards. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_RDC

config R6040
	tristate "RDC R6040 Fast Ethernet Adapter support"
	depends on PCI
	select CRC32
	select MII
	select PHYLIB
	help
	  This is a driver for the R6040 Fast Ethernet MACs found in the
	  the RDC R-321x System-on-chips.

	  To compile this driver as a module, choose M here: the module
	  will be called r6040. This is recommended.

endif # NET_VENDOR_RDC

```
