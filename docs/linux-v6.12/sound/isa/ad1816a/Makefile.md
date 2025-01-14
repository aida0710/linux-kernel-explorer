---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/isa/ad1816a/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for ALSA
# Copyright (c) 2001 by Jaroslav Kysela <perex@perex.cz>
#

snd-ad1816a-y := ad1816a.o ad1816a_lib.o

# Toplevel Module Dependency
obj-$(CONFIG_SND_AD1816A) += snd-ad1816a.o

```
