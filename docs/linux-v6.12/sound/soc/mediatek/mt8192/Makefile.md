---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/mediatek/mt8192/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

# platform driver
snd-soc-mt8192-afe-y := \
	mt8192-afe-pcm.o \
	mt8192-afe-clk.o \
	mt8192-afe-gpio.o \
	mt8192-dai-adda.o \
	mt8192-afe-control.o \
	mt8192-dai-i2s.o \
	mt8192-dai-pcm.o \
	mt8192-dai-tdm.o

obj-$(CONFIG_SND_SOC_MT8192) += snd-soc-mt8192-afe.o
obj-$(CONFIG_SND_SOC_MT8192_MT6359_RT1015_RT5682) += \
	mt8192-mt6359-rt1015-rt5682.o

```
