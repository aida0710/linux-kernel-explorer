---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/marvell/prestera/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Marvell Prestera drivers configuration
#

config PRESTERA
	tristate "Marvell Prestera Switch ASICs support"
	depends on NET_SWITCHDEV && VLAN_8021Q
	depends on BRIDGE || BRIDGE=n
	select NET_DEVLINK
	select PHYLINK
	help
	  This driver supports Marvell Prestera Switch ASICs family.

	  To compile this driver as a module, choose M here: the
	  module will be called prestera.

config PRESTERA_PCI
	tristate "PCI interface driver for Marvell Prestera Switch ASICs family"
	depends on PCI && HAS_IOMEM && PRESTERA
	default PRESTERA
	help
	  This is implementation of PCI interface support for Marvell Prestera
	  Switch ASICs family.

	  To compile this driver as a module, choose M here: the
	  module will be called prestera_pci.

```
