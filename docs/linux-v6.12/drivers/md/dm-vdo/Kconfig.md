---
sidebar_position: 32
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/md/dm-vdo/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config DM_VDO
	tristate "VDO: deduplication and compression target"
	depends on 64BIT
	depends on BLK_DEV_DM
	select DM_BUFIO
	select LZ4_COMPRESS
	select LZ4_DECOMPRESS
	help
	  This device mapper target presents a block device with
	  deduplication, compression and thin-provisioning.

	  To compile this code as a module, choose M here: the module will
	  be called dm-vdo.

	  If unsure, say N.

```
