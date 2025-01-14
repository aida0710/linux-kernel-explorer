---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm/mach-berlin/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y			+= berlin.o
obj-$(CONFIG_SMP)	+= headsmp.o platsmp.o

```
