---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/mc/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

#
# Media controller
#

config MEDIA_CONTROLLER_DVB
	bool "Enable Media controller for DVB (EXPERIMENTAL)"
	depends on MEDIA_CONTROLLER && DVB_CORE
	help
	  Enable the media controller API support for DVB.

	  This is currently experimental.

```
