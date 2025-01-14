---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/adi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
snd-soc-adi-axi-i2s-y := axi-i2s.o
snd-soc-adi-axi-spdif-y := axi-spdif.o

obj-$(CONFIG_SND_SOC_ADI_AXI_I2S) += snd-soc-adi-axi-i2s.o
obj-$(CONFIG_SND_SOC_ADI_AXI_SPDIF) += snd-soc-adi-axi-spdif.o

```
