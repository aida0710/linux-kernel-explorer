---
sidebar_position: 12
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/altera/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config ALTERA_TSE
	tristate "Altera Triple-Speed Ethernet MAC support"
	depends on HAS_DMA
	depends on HAS_IOMEM
	select PHYLIB
	select PHYLINK
	select PCS_LYNX
	select MDIO_REGMAP
	select REGMAP_MMIO
	help
	  This driver supports the Altera Triple-Speed (TSE) Ethernet MAC.

	  To compile this driver as a module, choose M here. The module
	  will be called alteratse.

```
