---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/v3d/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config DRM_V3D
	tristate "Broadcom V3D 3.x and newer"
	depends on ARCH_BCM || ARCH_BRCMSTB || ARCH_BCM2835 || COMPILE_TEST
	depends on DRM
	depends on COMMON_CLK
	depends on MMU
	select DRM_SCHED
	select DRM_GEM_SHMEM_HELPER
	help
	  Choose this option if you have a system that has a Broadcom
	  V3D 3.x or newer GPUs. SoCs supported include the BCM2711,
	  BCM7268 and BCM7278.

```
