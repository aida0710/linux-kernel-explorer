---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `net/l3mdev/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Configuration for L3 master device support
#

config NET_L3_MASTER_DEV
	bool "L3 Master device support"
	depends on INET || IPV6
	help
	  This module provides glue between core networking code and device
	  drivers to support L3 master devices like VRF.

```
