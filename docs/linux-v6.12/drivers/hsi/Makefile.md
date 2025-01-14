---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/hsi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for HSI
#
obj-$(CONFIG_HSI)		+= hsi.o
hsi-objs			:= hsi_core.o
hsi-$(CONFIG_HSI_BOARDINFO)	+= hsi_boardinfo.o
obj-y				+= controllers/
obj-y				+= clients/

```
