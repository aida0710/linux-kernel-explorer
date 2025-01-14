---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/tw686x/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
tw686x-objs := tw686x-core.o tw686x-video.o tw686x-audio.o

obj-$(CONFIG_VIDEO_TW686X) += tw686x.o

```
