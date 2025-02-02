---
sidebar_position: 9
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/synopsys/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Synopsys network device configuration
#

config NET_VENDOR_SYNOPSYS
	bool "Synopsys devices"
	default y
	help
	  If you have a network (Ethernet) device belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Synopsys devices. If you say Y, you will be asked
	  for your specific device in the following questions.

if NET_VENDOR_SYNOPSYS

config DWC_XLGMAC
	tristate "Synopsys DWC Enterprise Ethernet (XLGMAC) driver support"
	depends on HAS_IOMEM && HAS_DMA
	select BITREVERSE
	select CRC32
	help
	  This driver supports the Synopsys DesignWare Cores Enterprise
	  Ethernet (dwc-xlgmac).

if DWC_XLGMAC

config DWC_XLGMAC_PCI
	tristate "XLGMAC PCI bus support"
	depends on DWC_XLGMAC && PCI
	help
	  This selects the pci bus support for the dwc-xlgmac driver.
	  This driver was tested on Synopsys XLGMAC IP Prototyping Kit.

	  If you have a controller with this interface, say Y or M here.
	  If unsure, say N.

endif # DWC_XLGMAC

endif # NET_VENDOR_SYNOPSYS

```
