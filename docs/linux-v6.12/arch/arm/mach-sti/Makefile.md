---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-sti/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_SMP)		+= platsmp.o
obj-$(CONFIG_ARCH_STI) 		+= board-dt.o

```
