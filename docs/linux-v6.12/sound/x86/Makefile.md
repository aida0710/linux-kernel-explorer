---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/x86/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
snd-hdmi-lpe-audio-y += \
	intel_hdmi_audio.o

obj-$(CONFIG_HDMI_LPE_AUDIO) += snd-hdmi-lpe-audio.o

```
