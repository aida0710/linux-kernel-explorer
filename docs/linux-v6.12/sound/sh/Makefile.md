---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/sh/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for ALSA
#

snd-aica-y := aica.o
snd-sh_dac_audio-y := sh_dac_audio.o

# Toplevel Module Dependency
obj-$(CONFIG_SND_AICA) += snd-aica.o
obj-$(CONFIG_SND_SH_DAC_AUDIO) += snd-sh_dac_audio.o

```
