---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/aoa/core/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_SND_AOA) += snd-aoa.o
snd-aoa-y := core.o \
		alsa.o \
		gpio-pmf.o \
		gpio-feature.o

```
