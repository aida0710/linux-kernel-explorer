---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/ibm/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# IBM device configuration.
#

config NET_VENDOR_IBM
	bool "IBM devices"
	default y
	depends on PPC_PSERIES || PPC_DCR || (IBMEBUS && SPARSEMEM)
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about IBM devices. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_IBM

config IBMVETH
	tristate "IBM LAN Virtual Ethernet support"
	depends on PPC_PSERIES
	help
	  This driver supports virtual ethernet adapters on newer IBM iSeries
	  and pSeries systems.

	  To compile this driver as a module, choose M here. The module will
	  be called ibmveth.

source "drivers/net/ethernet/ibm/emac/Kconfig"

config EHEA
	tristate "eHEA Ethernet support"
	depends on IBMEBUS && SPARSEMEM
	help
	  This driver supports the IBM pSeries eHEA ethernet adapter.

	  To compile the driver as a module, choose M here. The module
	  will be called ehea.

config IBMVNIC
	tristate "IBM Virtual NIC support"
	depends on PPC_PSERIES
	help
	  This driver supports Virtual NIC adapters on IBM i and IBM System p
	  systems.

	  To compile this driver as a module, choose M here. The module will
	  be called ibmvnic.

endif # NET_VENDOR_IBM

```
