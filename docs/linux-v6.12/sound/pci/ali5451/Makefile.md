---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/pci/ali5451/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for ALSA
# Copyright (c) 2001 by Jaroslav Kysela <perex@perex.cz>
#

snd-ali5451-y := ali5451.o

# Toplevel Module Dependency
obj-$(CONFIG_SND_ALI5451) += snd-ali5451.o

```
