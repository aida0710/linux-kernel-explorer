---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/loongson2ef/lemote-2f/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for lemote loongson2f family machines
#

obj-y += clock.o machtype.o irq.o reset.o dma.o ec_kb3310b.o

#
# Suspend Support
#

obj-$(CONFIG_SUSPEND) += pm.o

```
