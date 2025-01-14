---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/sh/kernel/cpu/irq/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Linux/SuperH CPU-specific IRQ handlers.
#
obj-y					+= imask.o
obj-$(CONFIG_CPU_HAS_IPR_IRQ)		+= ipr.o

```
