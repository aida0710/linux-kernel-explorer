---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/accel/qaic/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for Qualcomm Cloud AI accelerators driver
#

obj-$(CONFIG_DRM_ACCEL_QAIC)	:= qaic.o

qaic-y := \
	mhi_controller.o \
	qaic_control.o \
	qaic_data.o \
	qaic_drv.o \
	qaic_timesync.o \
	sahara.o

qaic-$(CONFIG_DEBUG_FS) += qaic_debugfs.o

```
