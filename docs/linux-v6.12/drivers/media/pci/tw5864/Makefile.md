---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/tw5864/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
tw5864-objs := tw5864-core.o tw5864-video.o tw5864-h264.o tw5864-util.o

obj-$(CONFIG_VIDEO_TW5864) += tw5864.o

```
