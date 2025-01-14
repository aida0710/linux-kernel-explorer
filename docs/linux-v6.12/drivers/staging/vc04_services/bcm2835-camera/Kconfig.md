---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/vc04_services/bcm2835-camera/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config VIDEO_BCM2835
	tristate "BCM2835 Camera"
	depends on MEDIA_SUPPORT
	depends on VIDEO_DEV && (ARCH_BCM2835 || COMPILE_TEST)
	select BCM2835_VCHIQ if HAS_DMA
	select BCM2835_VCHIQ_MMAL if HAS_DMA
	select VIDEOBUF2_VMALLOC
	select BTREE
	help
	  Say Y here to enable camera host interface devices for
	  Broadcom BCM2835 SoC. This operates over the VCHIQ interface
	  to a service running on VideoCore.

```
