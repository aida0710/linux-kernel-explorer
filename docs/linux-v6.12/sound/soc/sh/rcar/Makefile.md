---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/sh/rcar/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
snd-soc-rcar-y		:= core.o gen.o dma.o adg.o ssi.o ssiu.o src.o ctu.o mix.o dvc.o cmd.o debugfs.o
obj-$(CONFIG_SND_SOC_RCAR)	+= snd-soc-rcar.o

```
