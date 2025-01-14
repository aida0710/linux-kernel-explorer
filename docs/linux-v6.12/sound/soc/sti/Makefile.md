---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/sti/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# STI platform support
snd-soc-sti-y := sti_uniperif.o uniperif_player.o uniperif_reader.o

obj-$(CONFIG_SND_SOC_STI) += snd-soc-sti.o

```
