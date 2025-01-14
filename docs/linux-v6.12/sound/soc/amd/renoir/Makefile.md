---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/amd/renoir/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0+
# Renoir platform Support
snd-rn-pci-acp3x-y	:= rn-pci-acp3x.o
snd-acp3x-pdm-dma-y	:= acp3x-pdm-dma.o
snd-acp3x-rn-y		:= acp3x-rn.o
obj-$(CONFIG_SND_SOC_AMD_RENOIR)	+= snd-rn-pci-acp3x.o
obj-$(CONFIG_SND_SOC_AMD_RENOIR)	+= snd-acp3x-pdm-dma.o
obj-$(CONFIG_SND_SOC_AMD_RENOIR_MACH)	+= snd-acp3x-rn.o

```
