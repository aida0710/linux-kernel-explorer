---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/mips/sibyte/bcm1480/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y := setup.o irq.o time.o

obj-$(CONFIG_SMP)			+= smp.o

```
