---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/net/switchdev/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Configuration for Switch device support
#

config NET_SWITCHDEV
	bool "Switch (and switch-ish) device support"
	depends on INET
	help
	  This module provides glue between core networking code and device
	  drivers in order to support hardware switch chips in very generic
	  meaning of the word "switch". This include devices supporting L2/L3 but
	  also various flow offloading chips, including switches embedded into
	  SR-IOV NICs.

```
