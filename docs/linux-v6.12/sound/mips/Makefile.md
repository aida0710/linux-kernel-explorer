---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/mips/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for ALSA
#

snd-sgi-o2-y := sgio2audio.o ad1843.o
snd-sgi-hal2-y := hal2.o

# Toplevel Module Dependency
obj-$(CONFIG_SND_SGI_O2) += snd-sgi-o2.o
obj-$(CONFIG_SND_SGI_HAL2) += snd-sgi-hal2.o
obj-$(CONFIG_SND_N64) += snd-n64.o

```
