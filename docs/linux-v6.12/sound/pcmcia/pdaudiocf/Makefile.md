---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/pcmcia/pdaudiocf/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for ALSA
# Copyright (c) 2004 by Jaroslav Kysela <perex@perex.cz>
#

snd-pdaudiocf-y := pdaudiocf.o pdaudiocf_core.o pdaudiocf_irq.o pdaudiocf_pcm.o

obj-$(CONFIG_SND_PDAUDIOCF) += snd-pdaudiocf.o

```
