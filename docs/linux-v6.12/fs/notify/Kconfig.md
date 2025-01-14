---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/fs/notify/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config FSNOTIFY
	def_bool n

source "fs/notify/dnotify/Kconfig"
source "fs/notify/inotify/Kconfig"
source "fs/notify/fanotify/Kconfig"

```
