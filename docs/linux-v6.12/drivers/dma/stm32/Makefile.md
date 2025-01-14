---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/dma/stm32/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_STM32_DMA) += stm32-dma.o
obj-$(CONFIG_STM32_DMAMUX) += stm32-dmamux.o
obj-$(CONFIG_STM32_MDMA) += stm32-mdma.o
obj-$(CONFIG_STM32_DMA3) += stm32-dma3.o

```
