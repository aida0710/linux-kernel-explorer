---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/firewire/oxfw/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
snd-oxfw-y := oxfw-command.o oxfw-stream.o oxfw-pcm.o oxfw-proc.o \
		 oxfw-midi.o oxfw-hwdep.o oxfw-spkr.o oxfw-scs1x.o oxfw.o
obj-$(CONFIG_SND_OXFW) += snd-oxfw.o

```
