---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/sibyte/common/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y := cfe.o
obj-$(CONFIG_SWIOTLB)			+= dma.o
obj-$(CONFIG_SIBYTE_BUS_WATCHER)	+= bus_watcher.o
obj-$(CONFIG_SIBYTE_CFE_CONSOLE)	+= cfe_console.o
obj-$(CONFIG_SIBYTE_TBPROF)		+= sb_tbprof.o

```
