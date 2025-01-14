---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/mediatek/mt6797/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

# platform driver
snd-soc-mt6797-afe-y := \
	mt6797-afe-pcm.o \
	mt6797-afe-clk.o \
	mt6797-dai-pcm.o \
	mt6797-dai-hostless.o \
	mt6797-dai-adda.o

obj-$(CONFIG_SND_SOC_MT6797) += snd-soc-mt6797-afe.o

# machine driver
obj-$(CONFIG_SND_SOC_MT6797_MT6351) += mt6797-mt6351.o

```
