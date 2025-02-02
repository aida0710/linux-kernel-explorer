---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/marvell/octeon_ep_vf/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Marvell's Octeon PCI Endpoint NIC VF Driver Configuration
#

config OCTEON_EP_VF
	tristate "Marvell Octeon PCI Endpoint NIC VF Driver"
	depends on 64BIT
	depends on PCI
	help
	  This driver supports the networking functionality of Marvell's
	  Octeon PCI Endpoint NIC VF.

	  To know the list of devices supported by this driver, refer to the
	  documentation in
	  <file:Documentation/networking/device_drivers/ethernet/marvell/octeon_ep_vf.rst>.

	  To compile this driver as a module, choose M here.
	  The name of the module will be octeon_ep_vf.

```
