---
sidebar_position: 15
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/misc/sgi-gru/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ccflags-$(CONFIG_SGI_GRU_DEBUG)	:= -DDEBUG

obj-$(CONFIG_SGI_GRU) := gru.o
gru-y := grufile.o grumain.o grufault.o grutlbpurge.o gruprocfs.o grukservices.o gruhandles.o grukdump.o


```
