---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/mtd/nand/spi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
spinand-objs := core.o alliancememory.o ato.o esmt.o foresee.o gigadevice.o macronix.o
spinand-objs += micron.o paragon.o toshiba.o winbond.o xtx.o
obj-$(CONFIG_MTD_SPI_NAND) += spinand.o

```
