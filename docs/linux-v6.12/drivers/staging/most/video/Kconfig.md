---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/staging/most/video/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# MOST V4L2 configuration
#

config MOST_VIDEO
	tristate "Video"
	depends on VIDEO_DEV
	help
	  Say Y here if you want to commumicate via Video 4 Linux.

	  To compile this driver as a module, choose M here: the
	  module will be called most_video.

```
