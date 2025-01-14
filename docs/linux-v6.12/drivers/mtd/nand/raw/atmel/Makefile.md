---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/mtd/nand/raw/atmel/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_MTD_NAND_ATMEL)	+= atmel-nand-controller.o atmel-pmecc.o

atmel-nand-controller-objs	:= nand-controller.o
atmel-pmecc-objs		:= pmecc.o

```
