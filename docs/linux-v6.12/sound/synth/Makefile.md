---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/synth/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for ALSA
# Copyright (c) 2001 by Jaroslav Kysela <perex@perex.cz>
#

snd-util-mem-y := util_mem.o

# Toplevel Module Dependency
obj-$(CONFIG_SND_EMU10K1) += snd-util-mem.o
obj-$(CONFIG_SND_TRIDENT) += snd-util-mem.o
obj-$(CONFIG_SND_SBAWE_SEQ) += snd-util-mem.o
obj-$(CONFIG_SND_SEQUENCER) += emux/

```
