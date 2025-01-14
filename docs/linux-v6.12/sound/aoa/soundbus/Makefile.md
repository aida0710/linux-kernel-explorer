---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/aoa/soundbus/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_SND_AOA_SOUNDBUS) += snd-aoa-soundbus.o
snd-aoa-soundbus-y := core.o sysfs.o
obj-$(CONFIG_SND_AOA_SOUNDBUS_I2S) += i2sbus/

```
