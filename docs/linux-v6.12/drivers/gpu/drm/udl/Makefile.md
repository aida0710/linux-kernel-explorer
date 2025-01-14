---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/udl/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

udl-y := \
	udl_drv.o \
	udl_edid.o \
	udl_main.o \
	udl_modeset.o \
	udl_transfer.o

obj-$(CONFIG_DRM_UDL) := udl.o

```
