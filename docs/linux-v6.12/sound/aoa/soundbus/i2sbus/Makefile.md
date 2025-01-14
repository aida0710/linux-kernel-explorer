---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/aoa/soundbus/i2sbus/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_SND_AOA_SOUNDBUS_I2S) += snd-aoa-i2sbus.o
snd-aoa-i2sbus-y := core.o pcm.o control.o

```
