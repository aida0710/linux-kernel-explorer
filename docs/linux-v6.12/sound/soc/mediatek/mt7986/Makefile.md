---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/mediatek/mt7986/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

# platform driver
snd-soc-mt7986-afe-y := \
	mt7986-afe-pcm.o \
	mt7986-dai-etdm.o

obj-$(CONFIG_SND_SOC_MT7986) += snd-soc-mt7986-afe.o
obj-$(CONFIG_SND_SOC_MT7986_WM8960) += mt7986-wm8960.o

```
