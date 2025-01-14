---
sidebar_position: 8
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/aacraid/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Adaptec aacraid

obj-$(CONFIG_SCSI_AACRAID) := aacraid.o

aacraid-objs	:= linit.o aachba.o commctrl.o comminit.o commsup.o \
		   dpcsup.o rx.o sa.o rkt.o nark.o src.o

```
