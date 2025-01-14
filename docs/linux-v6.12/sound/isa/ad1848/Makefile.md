---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/isa/ad1848/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for ALSA
# Copyright (c) 2001 by Jaroslav Kysela <perex@perex.cz>
#

snd-ad1848-y := ad1848.o

# Toplevel Module Dependency
obj-$(CONFIG_SND_AD1848) += snd-ad1848.o


```
