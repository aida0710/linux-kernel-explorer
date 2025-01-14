---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/dma/ptdma/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config AMD_PTDMA
	tristate  "AMD PassThru DMA Engine"
	depends on X86_64 && PCI
	select DMA_ENGINE
	select DMA_VIRTUAL_CHANNELS
	help
	  Enable support for the AMD PTDMA controller. This controller
	  provides DMA capabilities to perform high bandwidth memory to
	  memory and IO copy operations. It performs DMA transfer through
	  queue-based descriptor management. This DMA controller is intended
	  to be used with AMD Non-Transparent Bridge devices and not for
	  general purpose peripheral DMA.

```
