---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `drivers/net/can/esd/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CAN_ESD_402_PCI
	tristate "esd electronics gmbh CAN-PCI(e)/402 family"
	depends on PCI && HAS_DMA
	help
	  Support for C402 card family from esd electronics gmbh.
	  This card family is based on the ESDACC CAN controller and
	  available in several form factors:  PCI, PCIe, PCIe Mini,
	  M.2 PCIe, CPCIserial, PMC, XMC  (see https://esd.eu/en)

	  This driver can also be built as a module. In this case the
	  module will be called esd_402_pci.

```
