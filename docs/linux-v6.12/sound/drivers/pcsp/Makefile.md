---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/drivers/pcsp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
snd-pcsp-y := pcsp.o pcsp_lib.o pcsp_mixer.o pcsp_input.o
obj-$(CONFIG_SND_PCSP) += snd-pcsp.o

```
