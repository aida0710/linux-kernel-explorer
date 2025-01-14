---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/test-drivers/vimc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
vimc-y := vimc-core.o vimc-common.o vimc-streamer.o vimc-capture.o \
		vimc-debayer.o vimc-scaler.o vimc-sensor.o vimc-lens.o

obj-$(CONFIG_VIDEO_VIMC) += vimc.o


```
