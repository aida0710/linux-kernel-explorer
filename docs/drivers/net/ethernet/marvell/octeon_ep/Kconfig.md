---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/marvell/octeon_ep/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Marvell's Octeon PCI Endpoint NIC Driver Configuration
#

config OCTEON_EP
	tristate "Marvell Octeon PCI Endpoint NIC Driver"
	depends on 64BIT
	depends on PCI
	depends on PTP_1588_CLOCK_OPTIONAL
	help
	  This driver supports networking functionality of Marvell's
	  Octeon PCI Endpoint NIC.

	  To know the list of devices supported by this driver, refer
	  documentation in
	  <file:Documentation/networking/device_drivers/ethernet/marvell/octeon_ep.rst>.

	  To compile this drivers as a module, choose M here. Name of the
	  module is octeon_ep.

```
