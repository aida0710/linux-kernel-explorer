---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/amd/raven/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0+
# Raven Ridge platform Support
snd-pci-acp3x-y		:= pci-acp3x.o
snd-acp3x-pcm-dma-y	:= acp3x-pcm-dma.o
snd-acp3x-i2s-y		:= acp3x-i2s.o
obj-$(CONFIG_SND_SOC_AMD_ACP3x)	 += snd-pci-acp3x.o
obj-$(CONFIG_SND_SOC_AMD_ACP3x)	 += snd-acp3x-pcm-dma.o
obj-$(CONFIG_SND_SOC_AMD_ACP3x)	 += snd-acp3x-i2s.o

```
