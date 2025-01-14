---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/firewire/fireworks/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
snd-fireworks-y := fireworks_transaction.o fireworks_command.o \
		      fireworks_stream.o fireworks_proc.o fireworks_midi.o \
		      fireworks_pcm.o fireworks_hwdep.o fireworks.o
obj-$(CONFIG_SND_FIREWORKS) += snd-fireworks.o

```
