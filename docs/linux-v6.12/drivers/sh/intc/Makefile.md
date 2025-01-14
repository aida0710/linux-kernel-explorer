---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/sh/intc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y 	:= access.o chip.o core.o handle.o irqdomain.o virq.o

obj-$(CONFIG_INTC_BALANCING)		+= balancing.o
obj-$(CONFIG_INTC_USERIMASK)		+= userimask.o
obj-$(CONFIG_INTC_MAPPING_DEBUG)	+= virq-debugfs.o

```
