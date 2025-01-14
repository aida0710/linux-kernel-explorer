---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/allegro-dvt/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

allegro-objs := allegro-core.o allegro-mail.o
allegro-objs += nal-rbsp.o nal-h264.o nal-hevc.o

obj-$(CONFIG_VIDEO_ALLEGRO_DVT) += allegro.o

```
