---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/mtd/nand/raw/bcm47xxnflash/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
bcm47xxnflash-y				+= main.o
bcm47xxnflash-y				+= ops_bcm4706.o

obj-$(CONFIG_MTD_NAND_BCM47XXNFLASH)	+= bcm47xxnflash.o

```
