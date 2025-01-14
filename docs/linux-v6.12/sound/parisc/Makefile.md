---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/parisc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for ALSA
#

snd-harmony-y := harmony.o

# Toplevel Module Dependency
obj-$(CONFIG_SND_HARMONY) += snd-harmony.o

```
