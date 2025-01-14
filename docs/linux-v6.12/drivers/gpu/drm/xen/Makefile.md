---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xen/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0 OR MIT

drm_xen_front-objs := xen_drm_front.o \
		      xen_drm_front_kms.o \
		      xen_drm_front_conn.o \
		      xen_drm_front_evtchnl.o \
		      xen_drm_front_cfg.o \
		      xen_drm_front_gem.o

obj-$(CONFIG_DRM_XEN_FRONTEND) += drm_xen_front.o

```
