---
sidebar_position: 8
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/fs/orangefs/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config ORANGEFS_FS
	tristate "ORANGEFS (Powered by PVFS) support"
	select FS_POSIX_ACL
	help
	   Orange is a parallel file system designed for use on high end
	   computing (HEC) systems.

```
