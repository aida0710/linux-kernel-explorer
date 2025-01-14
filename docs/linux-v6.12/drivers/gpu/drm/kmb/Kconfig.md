---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/kmb/Kconfig`

### コンテンツ

```txt
config DRM_KMB_DISPLAY
	tristate "Intel Keembay Display"
	depends on DRM
	depends on ARCH_KEEMBAY || COMPILE_TEST
	select DRM_KMS_HELPER
	select DRM_DISPLAY_HELPER
	select DRM_BRIDGE_CONNECTOR
	select DRM_GEM_DMA_HELPER
	select DRM_MIPI_DSI
	help
	Choose this option if you have Intel's KeemBay SOC which integrates
	an ARM Cortex A53 CPU with an Intel Movidius VPU.

	If M is selected the module will be called kmb-drm.

```
