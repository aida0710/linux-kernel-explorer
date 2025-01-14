---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/pci/aw2/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
snd-aw2-y := aw2-alsa.o aw2-saa7146.o

obj-$(CONFIG_SND_AW2) += snd-aw2.o

```
