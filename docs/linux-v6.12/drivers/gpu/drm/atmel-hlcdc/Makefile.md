---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/atmel-hlcdc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
atmel-hlcdc-dc-y := atmel_hlcdc_crtc.o \
		atmel_hlcdc_dc.o \
		atmel_hlcdc_output.o \
		atmel_hlcdc_plane.o

obj-$(CONFIG_DRM_ATMEL_HLCDC)	+= atmel-hlcdc-dc.o

```
