---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `net/psample/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# psample packet sampling configuration
#

menuconfig PSAMPLE
	tristate "Packet-sampling netlink channel"
	default n
	help
	  Say Y here to add support for packet-sampling netlink channel
	  This netlink channel allows transferring packets alongside some
	  metadata to userspace.

	  To compile this support as a module, choose M here: the module will
	  be called psample.

```
