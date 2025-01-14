---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/gud/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

gud-y				:= gud_drv.o gud_pipe.o gud_connector.o
obj-$(CONFIG_DRM_GUD)		+= gud.o

```
