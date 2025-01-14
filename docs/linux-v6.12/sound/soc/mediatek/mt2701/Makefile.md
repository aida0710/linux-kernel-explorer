---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/mediatek/mt2701/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# platform driver
snd-soc-mt2701-afe-y := mt2701-afe-pcm.o mt2701-afe-clock-ctrl.o
obj-$(CONFIG_SND_SOC_MT2701) += snd-soc-mt2701-afe.o

# machine driver
obj-$(CONFIG_SND_SOC_MT2701_CS42448) += mt2701-cs42448.o
obj-$(CONFIG_SND_SOC_MT2701_WM8960) += mt2701-wm8960.o

```
