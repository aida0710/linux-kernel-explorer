---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/vboxvideo/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
vboxvideo-y :=  hgsmi_base.o modesetting.o vbva_base.o \
		vbox_drv.o vbox_hgsmi.o vbox_irq.o vbox_main.o \
		vbox_mode.o vbox_ttm.o

obj-$(CONFIG_DRM_VBOXVIDEO) += vboxvideo.o

```
