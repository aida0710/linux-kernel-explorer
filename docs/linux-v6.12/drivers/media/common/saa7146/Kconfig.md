---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/common/saa7146/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config VIDEO_SAA7146
	tristate
	depends on I2C && PCI

config VIDEO_SAA7146_VV
	tristate
	depends on VIDEO_DEV
	select VIDEOBUF2_DMA_SG
	select VIDEO_SAA7146

```
