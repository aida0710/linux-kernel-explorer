---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/hisilicon/hibmc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config DRM_HISI_HIBMC
	tristate "DRM Support for Hisilicon Hibmc"
	depends on DRM && PCI && (ARM64 || COMPILE_TEST)
	depends on MMU
	select DRM_KMS_HELPER
	select DRM_VRAM_HELPER
	select DRM_TTM
	select DRM_TTM_HELPER
	select I2C
	select I2C_ALGOBIT
	help
	  Choose this option if you have a Hisilicon Hibmc soc chipset.
	  If M is selected the module will be called hibmc-drm.

```
