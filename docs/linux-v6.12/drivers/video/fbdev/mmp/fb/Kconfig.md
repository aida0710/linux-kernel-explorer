---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/video/fbdev/mmp/fb/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MMP_FB
	tristate "fb driver for Marvell MMP Display Subsystem"
	depends on FB
	select FB_IOMEM_HELPERS
	default y
	help
		fb driver for Marvell MMP Display Subsystem

```
