---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/gud/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

config DRM_GUD
	tristate "GUD USB Display"
	depends on DRM && USB && MMU
	select LZ4_COMPRESS
	select DRM_KMS_HELPER
	select DRM_GEM_SHMEM_HELPER
	select BACKLIGHT_CLASS_DEVICE
	help
	  This is a DRM display driver for GUD USB Displays or display
	  adapters.

	  If M is selected the module will be called gud.

```
