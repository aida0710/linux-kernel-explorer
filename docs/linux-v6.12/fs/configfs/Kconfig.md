---
sidebar_position: 6
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/fs/configfs/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CONFIGFS_FS
	tristate "Userspace-driven configuration filesystem"
	select SYSFS
	help
	  configfs is a RAM-based filesystem that provides the converse
	  of sysfs's functionality. Where sysfs is a filesystem-based
	  view of kernel objects, configfs is a filesystem-based manager
	  of kernel objects, or config_items.

	  Both sysfs and configfs can and should exist together on the
	  same system. One is not a replacement for the other.

```
