---
sidebar_position: 15
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/st/sti/delta/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_VIDEO_STI_DELTA_DRIVER) += st-delta.o
st-delta-y := delta-v4l2.o delta-mem.o delta-ipc.o delta-debug.o

# MJPEG support
st-delta-$(CONFIG_VIDEO_STI_DELTA_MJPEG) += delta-mjpeg-hdr.o
st-delta-$(CONFIG_VIDEO_STI_DELTA_MJPEG) += delta-mjpeg-dec.o

```
