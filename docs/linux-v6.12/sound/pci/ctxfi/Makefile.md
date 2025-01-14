---
sidebar_position: 29
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/pci/ctxfi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
snd-ctxfi-y := xfi.o ctatc.o ctvmem.o ctpcm.o ctmixer.o ctresource.o \
	ctsrc.o ctamixer.o ctdaio.o ctimap.o cthardware.o cttimer.o \
	cthw20k2.o cthw20k1.o

obj-$(CONFIG_SND_CTXFI) += snd-ctxfi.o

```
