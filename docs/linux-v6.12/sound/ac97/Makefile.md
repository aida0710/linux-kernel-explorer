---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/ac97/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# make for AC97 bus drivers
#

obj-$(CONFIG_AC97_BUS_NEW)	+= ac97.o

ac97-y				+= bus.o codec.o
ac97-$(CONFIG_AC97_BUS_COMPAT)	+= snd_ac97_compat.o

```
