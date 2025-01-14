---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/isa/wavefront/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for ALSA
# Copyright (c) 2001 by Jaroslav Kysela <perex@perex.cz>
#

snd-wavefront-y := wavefront.o wavefront_fx.o wavefront_synth.o wavefront_midi.o

# Toplevel Module Dependency
obj-$(CONFIG_SND_WAVEFRONT) += snd-wavefront.o

```
