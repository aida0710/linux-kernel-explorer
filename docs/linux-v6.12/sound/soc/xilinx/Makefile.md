---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/soc/xilinx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
snd-soc-xlnx-i2s-y      := xlnx_i2s.o
obj-$(CONFIG_SND_SOC_XILINX_I2S) += snd-soc-xlnx-i2s.o
snd-soc-xlnx-formatter-pcm-y := xlnx_formatter_pcm.o
obj-$(CONFIG_SND_SOC_XILINX_AUDIO_FORMATTER) += snd-soc-xlnx-formatter-pcm.o
snd-soc-xlnx-spdif-y := xlnx_spdif.o
obj-$(CONFIG_SND_SOC_XILINX_SPDIF) += snd-soc-xlnx-spdif.o

```
