---
sidebar_position: 10
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/st/sti/hva/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_VIDEO_STI_HVA) += st-hva.o
st-hva-y := hva-v4l2.o hva-hw.o hva-mem.o hva-h264.o
st-hva-$(CONFIG_VIDEO_STI_HVA_DEBUGFS) += hva-debugfs.o

```
