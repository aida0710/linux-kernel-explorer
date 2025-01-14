---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/video/fbdev/mmp/panel/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
config MMP_PANEL_TPOHVGA
	bool "tpohvga panel TJ032MD01BW support"
	depends on SPI_MASTER
	help
		tpohvga panel support

```
