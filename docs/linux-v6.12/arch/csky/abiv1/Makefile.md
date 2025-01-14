---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/csky/abiv1/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CPU_NEED_SOFTALIGN)	+= alignment.o
obj-y					+= bswapdi.o
obj-y					+= bswapsi.o
obj-y					+= cacheflush.o
obj-y					+= mmap.o

```
