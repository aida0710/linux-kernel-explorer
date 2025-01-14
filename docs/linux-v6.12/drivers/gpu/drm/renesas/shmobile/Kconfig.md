---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/renesas/shmobile/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config DRM_SHMOBILE
	tristate "DRM Support for SH Mobile"
	depends on DRM && PM
	depends on ARCH_RENESAS || ARCH_SHMOBILE || COMPILE_TEST
	select BACKLIGHT_CLASS_DEVICE
	select DRM_KMS_HELPER
	select DRM_DISPLAY_HELPER
	select DRM_BRIDGE_CONNECTOR
	select DRM_GEM_DMA_HELPER
	select VIDEOMODE_HELPERS
	help
	  Choose this option if you have an SH Mobile chipset.
	  If M is selected the module will be called shmob-drm.


```
