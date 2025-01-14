---
sidebar_position: 22
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/md/persistent-data/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config DM_PERSISTENT_DATA
       tristate
       depends on BLK_DEV_DM
       select LIBCRC32C
       select DM_BUFIO
	help
	 Library providing immutable on-disk data structure support for
	 device-mapper targets such as the thin provisioning target.


```
