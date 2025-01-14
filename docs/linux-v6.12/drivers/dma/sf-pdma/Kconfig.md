---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/dma/sf-pdma/Kconfig`

### コンテンツ

```txt
config SF_PDMA
	tristate "Sifive PDMA controller driver"
	depends on HAS_IOMEM
	select DMA_ENGINE
	select DMA_VIRTUAL_CHANNELS
	help
	  Support the SiFive PDMA controller.

```
