---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rts5208/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_RTS5208) := rts5208.o

rts5208-y := rtsx.o rtsx_chip.o rtsx_transport.o rtsx_scsi.o \
	rtsx_card.o general.o sd.o xd.o ms.o spi.o

```
